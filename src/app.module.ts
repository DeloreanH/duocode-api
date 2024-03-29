import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from 'db/typeorm.config';
import { DuocodersModule } from './modules/duocoders/duocoders.module';
import { SkillsModule } from './modules/skills/skills.module';
import DepartmentModule from './modules/departments/department.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmOptions),
    DepartmentModule,
    DuocodersModule,
    SkillsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
