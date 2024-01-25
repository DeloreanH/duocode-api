import { DataSource } from 'typeorm';
import { Department } from '../modules/departments/entities/department.entity';

export async function depamentSeeder(dataSource: DataSource): Promise<void> {
  const departmentRepository = dataSource.getRepository(Department);
  await departmentRepository.insert([
    {
      name: 'finance',
    },
    {
      name: 'software development',
    },
    {
      name: 'human resources',
    },
  ]);
}
