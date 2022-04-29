import { Test, TestingModule } from '@nestjs/testing';
import { CallBudgetService } from './call-budget.service';

describe('CallBudgetService', () => {
  let service: CallBudgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallBudgetService],
    }).compile();

    service = module.get<CallBudgetService>(CallBudgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
