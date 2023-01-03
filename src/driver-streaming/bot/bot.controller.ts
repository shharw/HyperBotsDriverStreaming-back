import {Body, Controller, Get, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {BotService} from "./bot.service";
import {CreateBotDto} from "../dto/create-bot.dto";
import {ChangeBotDto} from "../dto/change-bot.dto";

@Controller('bot')
export class BotController {
    constructor(private readonly botService: BotService) {}

    @Get(':id')
    async getBot(@Res() response, @Param('id') id: string) {
        const bot = await this.botService.getBot(id);
        return response.status(HttpStatus.OK).json({
            bot,
        });
    }

    @Post()
    // @Header('Content-Type', 'application/json')
    async createBot(@Res() response, @Body() createBotDto: CreateBotDto){
        const bot = await this.botService.createBot(createBotDto)
        return response.status(HttpStatus.CREATED).json({
            bot,
        });
    }

    @Patch(':id')
    async updateBot(@Res() response, @Body() changeBotDto: ChangeBotDto, @Param('id') id: string){
        const bot = await this.botService.updateBot(id, changeBotDto)
        return response.status(HttpStatus.CREATED).json({
            bot,
        });
    }
}
