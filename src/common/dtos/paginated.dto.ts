import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Max, Min } from 'class-validator';

const MAX_ROWS = 25;
const MIN_PAGES = 1;

export class PaginatedDTO {
  @IsOptional()
  @Min(MIN_PAGES)
  @IsNumber()
  @Transform(({ value }) => Number(value))
  page: number = MIN_PAGES;

  @IsOptional()
  @Max(MAX_ROWS)
  @IsPositive()
  @Transform(({ value }) => Number(value))
  limit: number = MAX_ROWS;
}
