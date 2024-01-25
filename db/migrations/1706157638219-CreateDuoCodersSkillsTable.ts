import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'duocoders_skills';

export class CreateDuoCodersSkillsTable1706157638219
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: tableName,
        columns: [
          {
            name: 'duocoderId',
            type: 'int',
          },
          {
            name: 'skillId',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            name: 'Duocoder',
            columnNames: ['duocoderId'],
            referencedTableName: 'duocoders',
            referencedColumnNames: ['id'],

            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'Skill',
            columnNames: ['skillId'],
            referencedTableName: 'skills',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(tableName);

    const duocoderforeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('duocoderId') !== -1,
    );

    const skillforeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('skillId') !== -1,
    );

    await queryRunner.dropForeignKey(tableName, duocoderforeignKey);
    await queryRunner.dropForeignKey(tableName, skillforeignKey);
    await queryRunner.dropTable(tableName);
  }
}
