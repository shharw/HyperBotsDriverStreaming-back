import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bot } from './models/bot.model';
import { Driver } from './models/driver.model';
import { Route } from './models/route.model';
import { Task } from './models/task.model';
import { BotController } from './bot/bot.controller';
import { DriverController } from './driver/driver.controller';
import { RouteController } from './route/route.controller';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { BotService } from './bot/bot.service';
import { DriverService } from './driver/driver.service';
import { RouteService } from './route/route.service';
import { DriverStreamingController } from './driver-streaming.controller';
import { DriverStreamingService } from './driver-streaming.service';

@Module({
  imports: [SequelizeModule.forFeature([Bot, Driver, Route, Task])],
  controllers: [ BotController, DriverController, RouteController, TaskController, DriverStreamingController],
  providers: [TaskService, BotService, DriverService, RouteService, DriverStreamingService],
})
export class DriverStreamingModule {}
