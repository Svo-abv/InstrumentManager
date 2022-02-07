
import { Users } from 'src/dictionaries/users/schemas/users.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_LOGIN,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            entities: [Users,],
            synchronize: true,
        }),
    },
];
