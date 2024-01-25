import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DepartmentService } from './departmen.service';

@ApiTags('departments')
@Controller('departments')
@UseInterceptors(ClassSerializerInterceptor)
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ description: 'get all departments' })
  @Get()
  fetchAll() {
    return this.departmentService.fetchAll();
  }
}
