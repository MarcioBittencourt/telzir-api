import { Test, TestingModule } from '@nestjs/testing';
import { Plan } from '@prisma/client';
import { PrismaService } from '../shared/services/prisma.service';
import { CallBudgetService } from './call-budget.service';

describe('CallBudgetService', () => {
  let service: CallBudgetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CallBudgetService, PrismaService],
    }).compile();

    service = module.get<CallBudgetService>(CallBudgetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be persist a budget in the database', async () => {
    const datamass = {
      source: '017',
      target: '011',
      duration: 180,
      amount: 0,
      amountNoPlan: 0,
      plan: Plan.FALEMAIS30,
    };
    const result = await service.simulateBudget(datamass);
    expect(result.id).toBeDefined();
  });

  it('simulate call for plan FaleMais30', async () => {
    const datamass = {
      source: '017',
      target: '011',
      duration: 180,
      amount: 0,
      amountNoPlan: 0,
      plan: Plan.FALEMAIS30,
    };
    const result = await service.simulateBudget(datamass);
    expect(result.amount).toBe(445.5);
    expect(result.amountNoPlan).toBe(486);
  });

  it('simulate call for plan FaleMais60', async () => {
    const datamass = {
      source: '016',
      target: '011',
      duration: 70,
      amount: 0,
      amountNoPlan: 0,
      plan: Plan.FALEMAIS60,
    };
    const result = await service.simulateBudget(datamass);
    expect(result.amount).toBe(31.9);
    expect(result.amountNoPlan).toBe(203);
  });

  it('simulate call for plan FaleMais120', async () => {
    const datamass = {
      source: '018',
      target: '011',
      duration: 300,
      amount: 0,
      amountNoPlan: 0,
      plan: Plan.FALEMAIS120,
    };
    const result = await service.simulateBudget(datamass);
    expect(result.amount).toBe(376.2);
    expect(result.amountNoPlan).toBe(570);
  });
});
