import { Test, TestingModule } from '@nestjs/testing';
import { DuocodersService } from './duocoders.service';

describe('DuocodersService', () => {
  let service: DuocodersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuocodersService],
    }).compile();

    service = module.get<DuocodersService>(DuocodersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
