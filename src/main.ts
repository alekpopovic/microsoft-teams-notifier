import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PATHS, NOTIFICATION } from '@flyeralarm/grpc-protobuf';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: process.env.GRPC_SERVER_HOST,
        package: NOTIFICATION.NOTIFICATION_PACKAGE_NAME,
        protoPath: PATHS.NOTIFICATION,
        loader: {
          enums: String,
        },
      },
    },
  );
  app.listen(() => Logger.log(`gRPC microservice is runing on ${process.env.GRPC_SERVER_HOST}`));
}
bootstrap();
