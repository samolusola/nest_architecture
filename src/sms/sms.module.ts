import { Module } from '@nestjs/common';
import * as twilio from 'twilio';
import { SmsService } from './sms.service';
import { CustomProviderTokensEnum } from 'src/utils/custom-provider-tokens';

@Module({
  providers: [
    SmsService,
    {
      provide: CustomProviderTokensEnum.SMS_CLIENT,
      useFactory: () => {
        return twilio('AC_<Twilio Account SID>', '<Twilio Account Token>');
      },
    },
  ],
  exports: [SmsService],
})
export class SmsModule {}
