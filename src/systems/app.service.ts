import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getApi(): any {
        return { message: 'hello toto' };
    }

}
