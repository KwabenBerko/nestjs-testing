import { Module } from '@nestjs/common';
import { NoteModule } from './note/note.module';
import { DatabaseModule } from './shared/database/database.module';

@Module({
	imports: [NoteModule, DatabaseModule],
})
export class AppModule {}
