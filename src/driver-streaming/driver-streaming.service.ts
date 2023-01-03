import { Injectable } from '@nestjs/common';
import {Task} from "./models/task.model";
import {Bot} from "./models/bot.model";
import {Route} from "./models/route.model";
import {InjectModel} from "@nestjs/sequelize";
import {Driver} from "./models/driver.model";

@Injectable()
export class DriverStreamingService {
    constructor(
        @InjectModel(Driver)
        private driverModel: typeof Driver,
    ) {}

    async getAllDataFromDriver(id: string){
        return await this.driverModel.findAll({
            where:{
                id
            },
            include: [
                {
                    model: Task,
                },
                {
                    model: Bot,
                    include: [{
                        model: Route
                    }]
                },
            ]
        })
    }
}
