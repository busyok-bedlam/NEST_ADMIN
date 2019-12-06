import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	private readonly users: User[];
	constructor(){
		this users = [
			{
				userId: 1,
				username: 'john',
				password: 'password1'
			},
			{
				userId: 2,
				username: 'chris',
				password: 'password2'
			},
			{
				userId: 3,
				username: 'maria',
				password: 'password3'
			}
		]
	}

	async findOne(username: string): Promise<User | undefined> {
		return this.user.find(user => user.username === username);
	}
}
