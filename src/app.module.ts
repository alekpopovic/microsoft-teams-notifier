import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import * as Joi from "@hapi/joi";
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        MS_WEBHOOK_URL: Joi.string().required()
      }),
    }),
    NotificationModule
  ],
})
export class AppModule {}
