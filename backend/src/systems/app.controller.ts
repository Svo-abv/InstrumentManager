import { Controller, Get, SetMetadata } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private appService: AppService) { }

    @SetMetadata("isPublic", true)
    @Get()
    getApi(): string {
        return this.appService.getApi();
    }
}
