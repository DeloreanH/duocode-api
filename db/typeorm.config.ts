import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source';

config();

const configService = new ConfigService();

export const TypeOrmOptions = {
  type: 'mysql',
  host: configService.getOrThrow('DB_HOST'),
  port: configService.getOrThrow('DB_PORT'),
  database: configService.getOrThrow('DB_NAME'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  migrations: ['dist/db/migrations/*.js'],
  entities: ['dist/**/**/*.entity.js'],
} as DataSourceOptions;

export const TypeOrmSource = new DataSource(
  TypeOrmOptions as DataSourceOptions,
);
