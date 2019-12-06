import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy {
	constructor(private readonly authService: AuthService){
		super();
	}
	async validate(username: string, password): Promise<any> {
		const user = await this.authService.validateUser
		if(!user) {
			throw new UnauthorizedException();
		}
		return user;
	}
}

