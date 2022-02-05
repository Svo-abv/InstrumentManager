import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getApi(): string {
        return 'лай ла лай';
    }

}
