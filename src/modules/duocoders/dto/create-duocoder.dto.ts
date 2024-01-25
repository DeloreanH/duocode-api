import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDuocoderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  nif: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  biography: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  departmentId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  position: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  photo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  tortillaConCebolla: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  birthday: string;
}
