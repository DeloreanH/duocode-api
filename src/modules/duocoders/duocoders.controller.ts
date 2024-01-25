import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DuocodersService } from './duocoders.service';
import { CreateDuocoderDto } from './dto/create-duocoder.dto';
import { UpdateDuocoderDto } from './dto/update-duocoder.dto';
import PaginateDuocoders from './dto/paginate-duocoders.dto';

@Controller('duocoders')
export class DuocodersController {
  constructor(private readonly duocodersService: DuocodersService) {}

  @Post()
  create(@Body() createDuocoderDto: CreateDuocoderDto) {
    return this.duocodersService.create(createDuocoderDto);
  }

  @Get()
  paginate(@Query() params: PaginateDuocoders) {
    return this.duocodersService.paginate(params.page, params.limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duocodersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDuocoderDto: UpdateDuocoderDto,
  ) {
    return this.duocodersService.update(+id, updateDuocoderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duocodersService.remove(+id);
  }
}
