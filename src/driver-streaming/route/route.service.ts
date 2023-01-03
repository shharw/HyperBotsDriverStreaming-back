import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Route} from "../models/route.model";
import {CreateRouteDto} from "../dto/create-route.dto";
import {Bot} from "../models/bot.model";

@Injectable()
export class RouteService {
    constructor(
        @InjectModel(Route)
        private routeModel: typeof Route,
    ) {}

    async getRoute(id: string): Promise<Route> {
        return await this.routeModel.findOne({
            where: {
                id,
            }
        });
    }

    async createRoute(createRouteDto: CreateRouteDto): Promise<Route> {
        const route = new Route();
        route.toAddress = createRouteDto.toAddress;
        route.fromAddress = createRouteDto.fromAddress;
        return route.save()
    }

    async getRouteWithBots(){
        return await this.routeModel.findAll( {
            include: [{
                model: Bot
            }]
        } )
    }
}
