import { Injectable, Inject } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';

@Injectable()
export class DatabaseService {
	constructor(@InjectConnection() public connection: Connection) {}

	async getRepository<T>(entity): Promise<Repository<T>> {
		return this.connection.getRepository(entity);
	}
}
