import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CallBudget } from '@prisma/client';
import { CallBudgetService } from './call-budget.service';
import { CreateCallBudgetDto } from './dto/call-budget.create.dto';
import { UpdateCallBudgetDto } from './dto/call-budget.update.dto';

@Controller('franchise')
export class CallBudgetController {
  constructor(private readonly callBudgetService: CallBudgetService) {}

  @Post('simulate')
  async simulate(
    @Body() data: CreateCallBudgetDto,
  ): Promise<Partial<CallBudget>> {
    return this.callBudgetService.simulateBudget(data);
  }

  @Get()
  async findAll(): Promise<CallBudget[]> {
    return this.callBudgetService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Partial<CallBudget>> {
    return this.callBudgetService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCallBudgetDto: UpdateCallBudgetDto,
  ): Promise<CallBudget> {
    return this.callBudgetService.update(+id, updateCallBudgetDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CallBudget> {
    return this.callBudgetService.remove(+id);
  }
}
