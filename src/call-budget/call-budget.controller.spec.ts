import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../shared/services/prisma.service';
import { CallBudgetController } from './call-budget.controller';
import { CallBudgetService } from './call-budget.service';

describe('CallBudgetController', () => {
  let controller: CallBudgetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallBudgetController],
      providers: [CallBudgetService, PrismaService],
    }).compile();

    controller = module.get<CallBudgetController>(CallBudgetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
