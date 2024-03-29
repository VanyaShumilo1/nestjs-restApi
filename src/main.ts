import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "./pipes/validation.pipe";

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Nest Api')
      .setDescription('Nest api documentation')
      .setVersion('1.0.0')
      .addTag('nestjs')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT);
}
bootstrap();
