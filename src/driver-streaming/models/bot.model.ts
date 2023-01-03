import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo, HasOne,
} from 'sequelize-typescript';
import { Route } from './route.model';
import {Driver} from "./driver.model";

@Table({tableName: 'bot'})
export class Bot extends Model {
  @Column({ autoIncrement: true, primaryKey: true })
  id: number;

  @Column
  name: string;

  @Column
  charge: number;

  @Column
  speed: number;

  @BelongsTo(() => Route)
  route: Route;

  @HasOne(() => Driver)
  driver: Driver

  @ForeignKey(() => Route)
  @Column
  routeId: number;
}
