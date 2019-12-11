import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [AuthModule, MailModule, MongooseModule.forRoot('mongodb+srv://bulat:(_omar4hayam_)@cluster0-kglzf.mongodb.net/nest-admin?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
