import { Module } from '@nestjs/common';
import { DuocodersService } from './duocoders.service';
import { DuocodersController } from './duocoders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duocoder } from './entities/duocoder.entity';
import { SkillsModule } from '../skills/skills.module';

@Module({
  imports: [TypeOrmModule.forFeature([Duocoder]), SkillsModule],
  controllers: [DuocodersController],
  providers: [DuocodersService],
})
export class DuocodersModule {}
