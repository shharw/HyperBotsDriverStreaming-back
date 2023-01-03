import { Module } from '@nestjs/common';
import { DriverStreamingModule } from './driver-streaming/driver-streaming.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { Bot } from './driver-streaming/models/bot.model';
import { Driver } from './driver-streaming/models/driver.model';
import { Route } from './driver-streaming/models/route.model';
import { Task } from './driver-streaming/models/task.model';
import {RouterModule} from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SequelizeModule.forRoot({
      dialect: <Dialect>process.env.SQL_DIALECT,
      logging: process.env.SQL_LOGGING === 'true',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [Bot, Driver, Route, Task],
      autoLoadModels: true,
      synchronize: true,
    }),
    DriverStreamingModule,
    RouterModule.register([
      {
        path: '/api/v1/driver-streaming',
        module: DriverStreamingModule,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
