import { Module } from '@nestjs/common';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Note from './note.entity';
import { NoteController } from './note.controller';

@Module({
	imports: [TypeOrmModule.forFeature([Note])],
	controllers: [NoteController],
	providers: [NoteService],
})
export class NoteModule {}
