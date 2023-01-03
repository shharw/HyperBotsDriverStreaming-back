import {
  Table,
  Model,
  Column,
  ForeignKey,
  HasMany, HasOne, BelongsTo,
} from 'sequelize-typescript';
import { Bot } from './bot.model';
import { Task } from './task.model';

@Table({tableName: 'driver'})
export class Driver extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  name: string;

  @BelongsTo(() => Bot)
  bot: Bot;

  @ForeignKey(() => Bot)
  @Column
  botId: number;

  @HasMany(() => Task)
  tasks: Task[];
}
