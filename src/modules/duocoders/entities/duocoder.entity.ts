import { ApiProperty } from '@nestjs/swagger';
import { Department } from '../../departments/entities/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('duocoders')
export class Duocoder {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  nif: number;

  @ApiProperty()
  @Column({ nullable: true })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  biography: string;

  @ApiProperty()
  @Column({ nullable: false })
  departmentId: number;

  @ManyToOne(() => Department, (department) => department.duocoders)
  department: Department;

  @ApiProperty()
  @Column({ nullable: true })
  position: string;

  @ApiProperty()
  @Column({ nullable: true })
  photo: string;

  @ApiProperty()
  @Column({ type: Boolean, nullable: false })
  tortillaConCebolla: boolean;

  @ApiProperty()
  @Column({ type: Date, nullable: true })
  birthday: Date;

  @ApiProperty({ type: Date })
  @Column({ type: Date, nullable: true })
  createdAt: Date;

  @ApiProperty({ type: Date })
  @Column({ type: Date, nullable: true })
  updatedAt: Date;
}
