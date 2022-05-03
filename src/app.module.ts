import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallBudgetModule } from './call-budget/call-budget.module';
import { PrismaService } from './shared/services/prisma.service';

@Module({
  imports: [CallBudgetModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
