import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class CheckAuthGuard implements CanActivate {
    public constructor(private readonly reflector: Reflector, private authService: AuthService) {
    }

    public canActivate(context: ExecutionContext): boolean {
        const isPublic = this.reflector.get<boolean>("isPublic", context.getHandler());

        if (isPublic) {
            return true;
        }

        try {
            const req = context.switchToHttp().getRequest();
            const token = req.headers["authorization"].split(' ')[1];
            if (!token) {
                throw new UnauthorizedException("Ошибка авторизации");
            }
            const decoded = this.authService.verify(token);
            req["user"] = decoded;
            return true;

        } catch (e) {
            throw new UnauthorizedException("Ошибка авторизации");
        }
        return false;
    }
}