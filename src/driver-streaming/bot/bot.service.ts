import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Bot} from "../models/bot.model";
import {CreateBotDto} from "../dto/create-bot.dto";
import {ChangeBotDto} from "../dto/change-bot.dto";

@Injectable()
export class BotService {
    constructor(
        @InjectModel(Bot)
        private botModel: typeof Bot,
    ) {}

    async getBot(id: string): Promise<Bot> {
        return await this.botModel.findOne({
            where: {
                id,
            }
        });
    }

    async createBot(createBotDto: CreateBotDto): Promise<Bot> {
        const bot = new Bot();
        bot.name = createBotDto.name;
        bot.charge = createBotDto.charge;
        bot.speed = createBotDto.speed;
        return bot.save()
    }

    async updateBot(id: string, changeBotDto: ChangeBotDto): Promise<[affectedCount: number, affectedRows: Bot[]]>{
        const bot = await this.botModel.update(
            {...changeBotDto},
            {
                where:{
                    id
                },
                returning: true
            }
        )
        return bot;
    }
}
