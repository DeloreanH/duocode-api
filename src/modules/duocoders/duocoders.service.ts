import { Injectable } from '@nestjs/common';
import { CreateDuocoderDto } from './dto/create-duocoder.dto';
import { UpdateDuocoderDto } from './dto/update-duocoder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Duocoder } from './entities/duocoder.entity';
import { Repository } from 'typeorm';
import { Pagination } from 'src/common/utils/pagination';

@Injectable()
export class DuocodersService {
  constructor(
    @InjectRepository(Duocoder)
    private readonly duocoderRepository: Repository<Duocoder>,
  ) {}

  create(createDuocoderDto: CreateDuocoderDto) {
    return this.duocoderRepository.save(createDuocoderDto);
  }

  async paginate(page: number, limit: number) {
    const [duocoders, count] = await this.duocoderRepository.findAndCount({
      relations: ['department'],
      take: limit,
      skip: (page - 1) * limit,
    });

    return new Pagination<Duocoder>(duocoders, count, page, limit);
  }

  findOne(id: number) {
    return this.duocoderRepository.findOne({
      where: { id },
      relations: ['department'],
    });
  }

  async update(id: number, updateDuocoderDto: UpdateDuocoderDto) {
    await this.duocoderRepository.update({ id }, updateDuocoderDto);
    return this.duocoderRepository.findOneByOrFail({ id });
  }

  remove(id: number) {
    return this.duocoderRepository.delete(id);
  }
}
