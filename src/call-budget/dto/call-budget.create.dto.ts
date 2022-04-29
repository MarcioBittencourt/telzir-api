import { Plan } from '@prisma/client';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateCallBudgetDto {
  @IsString()
  source: string;

  @IsString()
  target: string;

  @IsNumber()
  duration: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  amount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  amountNoPlan: number;

  @IsEnum(Plan)
  plan: Plan;
}
