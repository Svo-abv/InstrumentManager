import { IsString, MaxLength, MinLength } from "class-validator";


export class RegUserDto {
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly name: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    readonly password: string;
}

export class AuthUserDto {
    readonly jwtKey: string;
}