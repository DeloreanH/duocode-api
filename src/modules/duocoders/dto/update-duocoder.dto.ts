import { PartialType } from '@nestjs/swagger';
import { CreateDuocoderDto } from './create-duocoder.dto';

export class UpdateDuocoderDto extends PartialType(CreateDuocoderDto) {}
