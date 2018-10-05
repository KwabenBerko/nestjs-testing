import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			database: 'nestjs_testing',
			username: 'postgres',
			password: 'postgres',
			entities: [process.cwd() + '/src/**/*.entity{.ts,.js}'],
			synchronize: true,
		}),
	],
	providers: [DatabaseService],
	exports: [DatabaseService],
})
export class DatabaseModule {}
