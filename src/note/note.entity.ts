import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'notes' })
class Note {
	@PrimaryGeneratedColumn('uuid')
	noteId: string;

	@Column()
	text: string;

	@Column({ default: false })
	isCompleted: boolean;

	@CreateDateColumn()
	createdAt: Date;
}

export default Note;
