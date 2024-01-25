import { Injectable } from '@nestjs/common';
import { CreateDuocoderDto } from './dto/create-duocoder.dto';
import { UpdateDuocoderDto } from './dto/update-duocoder.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Duocoder } from './entities/duocoder.entity';
import { Repository } from 'typeorm';
import { Pagination } from 'src/common/utils/pagination';
import { SkillsService } from '../skills/skills.service';

@Injectable()
export class DuocodersService {
  constructor(
    @InjectRepository(Duocoder)
    private readonly duocoderRepository: Repository<Duocoder>,
    private readonly skillService: SkillsService,
  ) {}

  async create(createDuocoderDto: CreateDuocoderDto) {
    const { skillIds, ...data } = createDuocoderDto;
    const skills = await this.skillService.findByIds(skillIds);

    return this.duocoderRepository.save({
      ...data,
      skills,
    });
  }

  async paginate(page: number, limit: number) {
    const [duocoders, count] = await this.duocoderRepository.findAndCount({
      relations: ['department', 'skills'],
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
    const { skillIds, ...payload } = updateDuocoderDto;
    const duocoder = await this.duocoderRepository.findOneByOrFail({ id });

    let data = payload;

    if (skillIds.length > 0) {
      const skills = await this.skillService.findByIds(skillIds);
      data = { ...data, ...{ skills } };
    }

    return await this.duocoderRepository.save({
      ...duocoder,
      ...data,
    });
  }

  remove(id: number) {
    return this.duocoderRepository.delete(id);
  }
}
