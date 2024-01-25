import { DataSource } from 'typeorm';
import { Skill } from '../modules/skills/entities/skill.entity';

export async function skillSeeder(dataSource: DataSource): Promise<void> {
  const departmentRepository = dataSource.getRepository(Skill);
  await departmentRepository.insert([
    {
      name: 'nodejs',
    },
    {
      name: 'laravel',
    },
    {
      name: 'react',
    },
    {
      name: 'nestjs',
    },
    {
      name: 'java',
    },
  ]);
}
