import { Inject, Injectable } from '@nestjs/common';
import { CustomProviderTokensEnum } from 'src/utils/custom-provider-tokens';
import { Twilio } from 'twilio';

@Injectable()
export class SmsService {
  constructor(
    @Inject(CustomProviderTokensEnum.SMS_CLIENT)
    private twilioClient: Twilio,
  ) {}

  public async send(body): Promise<string> {
    const msg = await this.twilioClient.messages.create(body);
    return msg.sid;
  }
}
