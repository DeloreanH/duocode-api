import { ApiProperty } from '@nestjs/swagger';
import { Duocoder } from 'src/modules/duocoders/entities/duocoder.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('skills')
export class Skill extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ManyToMany(() => Duocoder, (duocoder) => duocoder.skills)
  duocoders: Duocoder[];

  @ApiProperty()
  @Column({ type: Date, nullable: true })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: Date, nullable: true })
  updatedAt: Date;
}
