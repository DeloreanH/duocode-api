import { ApiProperty } from '@nestjs/swagger';
import { Duocoder } from '../../duocoders/entities/duocoder.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('departments')
export class Department {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  description: string;

  @OneToMany(() => Duocoder, (duocoder) => duocoder.department)
  duocoders: Duocoder[];

  @ApiProperty()
  @Column({ type: Date, nullable: true })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: Date, nullable: true })
  updatedAt: Date;
}
