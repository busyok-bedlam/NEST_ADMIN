import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  providers: [MailService],
	imports: [MongooseModule.forRoot('mongodb+srv://bulat:(_omar4hayam_)@cluster0-kglzf.mongodb.net/test?retryWrites=true&w=majority')]
})
export class MailModule {}
