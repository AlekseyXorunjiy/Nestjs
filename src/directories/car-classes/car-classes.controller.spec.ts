import { Test, TestingModule } from '@nestjs/testing';
import { CarClassesController } from './car-classes.controller';

describe('CarClassesController', () => {
  let controller: CarClassesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarClassesController],
    }).compile();

    controller = module.get<CarClassesController>(CarClassesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
