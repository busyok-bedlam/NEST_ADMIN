import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MessageSchema } from  './schemas/mail.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Messages', schema: MessageSchema }])],
  providers: [MailService]
})
export class MailModule {}
