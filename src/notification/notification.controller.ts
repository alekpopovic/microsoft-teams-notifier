import { Controller } from '@nestjs/common';
import { NOTIFICATION } from '@flyeralarm/grpc-protobuf';
import { GrpcMethod } from '@nestjs/microservices';
import { NotificationService } from './notification.service';

@Controller()
@NOTIFICATION.NotificationServiceControllerMethods()
export class NotificationController implements NOTIFICATION.NotificationServiceController {
  constructor(private readonly notificationService: NotificationService) {}

  @GrpcMethod(NOTIFICATION.NOTIFICATION_SERVICE_NAME)
  async exampleNotification({
    title,
    activityTitle,
    text
  }: NOTIFICATION.NotificationRequest): Promise<NOTIFICATION.NotificationResponse> {
    return await this.notificationService.exampleMsTeamsNotification(title, activityTitle, text)
  }
}