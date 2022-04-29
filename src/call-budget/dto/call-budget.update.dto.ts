import { PartialType } from '@nestjs/mapped-types';
import { CreateCallBudgetDto } from './call-budget.create.dto';

export class UpdateCallBudgetDto extends PartialType(CreateCallBudgetDto) {}
