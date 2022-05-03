import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { PrismaService } from '../shared/services/prisma.service';
import { CallBudgetController } from './call-budget.controller';
import { CallBudgetService } from './call-budget.service';

describe('CallBudgetController', () => {
  let controller: CallBudgetController;
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallBudgetController],
      providers: [CallBudgetService, PrismaService],
    }).compile();

    controller = module.get<CallBudgetController>(CallBudgetController);

    app = module.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('/POST franchise', async () => {
    const response = await request(app.getHttpServer())
      .post('/franchise/simulate')
      .send({
        source: '018',
        target: '011',
        duration: 300,
        amount: 0,
        amountNoPlan: 0,
        plan: 'FALEMAIS120',
      });
    expect(response.status).toBe(201);
    expect(response.body.source).toBe('018');
    expect(response.body.target).toBe('011');
    expect(response.body.duration).toBe(300);
    expect(response.body.amount).toBe(376.2);
    expect(response.body.amountNoPlan).toBe(570);
    expect(response.body.plan).toBe('FALEMAIS120');
  });

  afterAll(async () => {
    await app.close();
  });
});
