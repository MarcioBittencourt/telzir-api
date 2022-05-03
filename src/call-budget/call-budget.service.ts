import { Injectable } from '@nestjs/common';
import { CallBudget, Prisma, Plan } from '@prisma/client';
import { PrismaService } from '../shared/services/prisma.service';

const TAX = 0.1;

const PLANS = {
  FALEMAIS30: 30,
  FALEMAIS60: 60,
  FALEMAIS120: 120,
};

const TARIFF_TABLE = {
  t011_016: 1.9,
  t016_011: 2.9,
  t011_017: 1.7,
  t017_011: 2.7,
  t011_018: 2.7,
  t018_011: 1.9,
};

@Injectable()
export class CallBudgetService {
  constructor(private readonly prisma: PrismaService) {}

  async simulateBudget(
    data: Prisma.CallBudgetUncheckedCreateInput,
  ): Promise<any> {
    const { cost, costNoPlan } = this.callCost(
      data.source,
      data.target,
      data.duration,
      data.plan,
      +data.amount,
      +data.amountNoPlan,
    );
    data.amount = cost;
    data.amountNoPlan = costNoPlan;
    const response = await this.prisma.callBudget.create({ data });
    const { amount, amountNoPlan, ...rest } = response;
    return {
      amount: amount.toNumber(),
      amountNoPlan: amountNoPlan.toNumber(),
      ...rest,
    };
  }

  private callCost = (
    source: string,
    target: string,
    duration: number,
    plan: Plan,
    cost: number,
    costNoPlan: number,
  ) => {
    const tariff = TARIFF_TABLE[`t${source}_${target}`];
    if (!tariff)
      throw new Error(
        'os DDDs informados de origem ou destino não estão disponiveis',
      );
    const franchise = PLANS[plan];
    const excedent = duration > franchise ? duration - franchise : 0;
    costNoPlan = duration * tariff;
    cost = tariff * excedent + tariff * excedent * TAX;
    return { cost, costNoPlan };
  };

  async findAll(): Promise<Partial<CallBudget[]>> {
    return this.prisma.callBudget.findMany({});
  }

  async findOne(id: number): Promise<Partial<CallBudget>> {
    return this.prisma.callBudget.findUnique({
      where: { id },
      select: {
        uuid: true,
        source: true,
        duration: true,
        target: true,
        amount: true,
      },
    });
  }

  async update(
    id: number,
    data: Prisma.CallBudgetUpdateInput,
  ): Promise<CallBudget> {
    return this.prisma.callBudget.update({
      where: { id },
      data,
    });
  }

  async remove(id: number): Promise<CallBudget> {
    return this.prisma.callBudget.delete({
      where: { id },
    });
  }
}
