import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
