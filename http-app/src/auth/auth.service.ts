import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
	constructor(private readonly userService: UsersService){};

	async validateUser(username: string, pass: string){
		const user = this.usersService.findOne()
		if(user && user.password === pass){
			const { password, ...result } = user;
			return result;
		}
		return null;
	}

}
