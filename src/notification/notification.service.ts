import { Injectable } from '@nestjs/common';
import { IncomingWebhook } from "ms-teams-webhook";
import { NOTIFICATION } from '@flyeralarm/grpc-protobuf';

@Injectable()
export class NotificationService {
  async exampleMsTeamsNotification(title: string, activityTitle: string, text: string): Promise<NOTIFICATION.NotificationResponse> {
    const webhook = new IncomingWebhook(
      `${process.env.MS_WEBHOOK_URL}`
    );
    return await webhook.send(
      JSON.stringify({
        "@type": "MessageCard",
        "@context": "https://schema.org/extensions",
        summary: "Issue 176715375",
        themeColor: "0078D7",
        title: `${title}`,
        sections: [
          {
            activityTitle: `${activityTitle}`,
            activitySubtitle: `${new Date()}`,
            activityImage:
              "https://avatars.githubusercontent.com/u/22687313?s=200&v=4",
            text: `${text}`
          }
        ]
      })
    );
  }
}