import { Module } from '@nestjs/common';
import { CallBudgetService } from './call-budget.service';
import { CallBudgetController } from './call-budget.controller';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  controllers: [CallBudgetController],
  providers: [CallBudgetService, PrismaService],
})
export class CallBudgetModule {}
