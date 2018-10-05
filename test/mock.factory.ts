import { CreateNoteDto } from '../src/note/dto/create-note.dto';
import { UpdateNoteDto } from '../src/note/dto/update-note-dto';

export class MockFactory {
	genCreateNoteDto() {
		const dto = new CreateNoteDto();
		dto.text = 'Learn Testing';
		return dto;
	}

	genUpdateNoteDto() {
		const dto = new UpdateNoteDto();
		dto.isCompleted = true;
		return dto;
	}
}
