import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Driver} from "../models/driver.model";
import {CreateDriverDto} from "../dto/create-driver.dto";
import {ChangeDriverDto} from "../dto/change-driver.dto";
import {Bot} from "../models/bot.model";

@Injectable()
export class DriverService {
    constructor(
        @InjectModel(Driver)
        private driverModel: typeof Driver,
    ) {}

    async getDriver(id: string): Promise<Driver> {
        return await this.driverModel.findOne({
            where: {
                id,
            }
        });
    }

    async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
        const driver = new Driver();
        driver.name = createDriverDto.name;
        return driver.save()
    }

    async updateDriver(id: string, changeDriverDto: ChangeDriverDto): Promise<[affectedCount: number, affectedRows: Driver[]]>{
        const driver = await this.driverModel.update(
            {...changeDriverDto},
            {
                where:{
                    id
                },
                returning: true
            }
        )
        return driver;
    }

    async getDriversWithBots(){
    return await this.driverModel.findAll( {
            include: [{
                model: Bot
            }]
        } )
    }
}
