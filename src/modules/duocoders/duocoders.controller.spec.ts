import { Test, TestingModule } from '@nestjs/testing';
import { DuocodersController } from './duocoders.controller';
import { DuocodersService } from './duocoders.service';

describe('DuocodersController', () => {
  let controller: DuocodersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuocodersController],
      providers: [DuocodersService],
    }).compile();

    controller = module.get<DuocodersController>(DuocodersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
