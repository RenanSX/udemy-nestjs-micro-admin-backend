import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://user:q7W2UQk249gR@18.210.17.173:5672/smartranking'],
      noAck: false,
      queue: 'admin-backend',
    },
  });

  await app.listen();
}
bootstrap();
