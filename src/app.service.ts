import { Injectable } from '@nestjs/common';
import { IncomingWebhook } from "ms-teams-webhook";

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    const webhook = new IncomingWebhook(
      'https://flyeralarm.webhook.office.com/webhookb2/26600c38-4ad6-444d-8ffb-b0794f119675@8bc55320-052b-4b5f-a553-79c567cfafcd/IncomingWebhook/f02a054d6c0846a8b522a24387798e44/75838924-6ecc-4d3d-9949-b31327bc11eb'
    );
    await webhook.send(
      JSON.stringify({
        "@type": "MessageCard",
        "@context": "https://schema.org/extensions",
        summary: "Issue 176715375",
        themeColor: "0078D7",
        title: 'Flyeralarm Empire Notifier"',
        sections: [
          {
            activityTitle: "Example notification",
            activitySubtitle: `${new Date()}`,
            activityImage:
              "https://avatars.githubusercontent.com/u/22687313?s=200&v=4",
            text: 'SOME ALERT MESSAGE!!!'
          }
        ]
      })
    );
    return 'Microsoft webhook message send!!!';
  }
}
