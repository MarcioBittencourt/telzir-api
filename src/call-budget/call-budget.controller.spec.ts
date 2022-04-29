import { Test, TestingModule } from '@nestjs/testing';
import { CallBudgetController } from './call-budget.controller';
import { CallBudgetService } from './call-budget.service';

describe('CallBudgetController', () => {
  let controller: CallBudgetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallBudgetController],
      providers: [CallBudgetService],
    }).compile();

    controller = module.get<CallBudgetController>(CallBudgetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
