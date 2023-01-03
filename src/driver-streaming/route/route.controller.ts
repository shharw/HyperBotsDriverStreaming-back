import {Body, Controller, Get, HttpStatus, Param, Post, Res} from '@nestjs/common';
import {RouteService} from "./route.service";
import {CreateRouteDto} from "../dto/create-route.dto";

@Controller('route')
export class RouteController {
    constructor(private readonly routeService: RouteService) {}

    @Get('with-bots')
    async getRouteWithBots(@Res() response){
        const route = await this.routeService.getRouteWithBots();
        return response.status(HttpStatus.OK).json({
            route,
        });
    }

    @Get(':id')
    async getRoute(@Res() response, @Param('id') id: string) {
        const route = await this.routeService.getRoute(id);
        return response.status(HttpStatus.OK).json({
            route,
        });
    }

    @Post()
    // @Header('Content-Type', 'application/json')
    async createRoute(@Res() response, @Body() createRouteDto: CreateRouteDto){
        const route = await this.routeService.createRoute(createRouteDto)
        return response.status(HttpStatus.CREATED).json({
            route,
        });
    }
}
