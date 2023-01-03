import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Driver } from './driver.model';

@Table({tableName: 'task'})
export class Task extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Driver)
  @Column
  driverId: number;

  @BelongsTo(() => Driver)
  driver: Driver;

  @Column
  description: string;
}
