import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [UserModule, OrdersModule, ChatModule, SmsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
