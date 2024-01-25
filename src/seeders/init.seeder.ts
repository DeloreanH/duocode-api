import { NestFactory } from '@nestjs/core';
import { DataSource } from 'typeorm';
import { AppModule } from '../app.module';
import { depamentSeeder } from './departments.seeder';
import { skillSeeder } from './skills.seeder';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const dataSource = app.get(DataSource);
  await depamentSeeder(dataSource);
  await skillSeeder(dataSource);
  await app.close();
}

runSeeder();
