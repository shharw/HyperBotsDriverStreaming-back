import { Table, Model, Column, HasMany } from 'sequelize-typescript';
import { Bot } from './bot.model';

@Table({tableName: 'route'})
export class Route extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  fromAddress: string;

  @Column
  toAddress: string;

  @HasMany(() => Bot)
  bots: Bot[];
}
