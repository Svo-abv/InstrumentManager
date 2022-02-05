import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './systems/app.module';

async function startApp() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Менеджер инструментов')
    .setDescription('Система учета хранения и аренды инструментов')
    .setVersion('0.1')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/help', app, document);

  await app.listen(5000).then(() => console.log('server started, at:'));
}
startApp();
