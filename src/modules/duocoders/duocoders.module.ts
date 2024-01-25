import { Module } from '@nestjs/common';
import { DuocodersService } from './duocoders.service';
import { DuocodersController } from './duocoders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Duocoder } from './entities/duocoder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Duocoder])],
  controllers: [DuocodersController],
  providers: [DuocodersService],
})
export class DuocodersModule {}
