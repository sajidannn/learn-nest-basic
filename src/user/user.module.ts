import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MongDBConnection,
  MySqlConnection,
} from './connection/connection';
import { MailService, mailService } from './mail/mail.service';
import {
  createUSerRepository,
  UserRepository,
} from './user-repository/user-repository';
import { MemeberService } from './memeber/memeber.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABSE == 'mysql' ? MySqlConnection : MongDBConnection,
    },
    {
      provide: MailService,
      useValue: mailService,
    },
    {
      provide: 'EmailService',
      useExisting: MailService,
    },
    {
      provide: UserRepository,
      useFactory: createUSerRepository,
      inject: [Connection],
    },
    MemeberService,
  ],
})
export class UserModule {}
