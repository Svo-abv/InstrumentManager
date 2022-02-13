import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './systems/app.module';

async function startApp() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Менеджер инструментов')
    .setDescription('Система учета хранения и аренды инструментов')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('manual', app, document);

  await app.listen(process.env.SERVER_API_PORT || 5001).then(() => console.log(`server started, at: ${process.env.SERVER_API_PORT || 5001} port`));
}

startApp();
