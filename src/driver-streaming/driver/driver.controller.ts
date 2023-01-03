import {Controller, Get, HttpStatus, Res, Post, Param, Body, Header, Patch} from '@nestjs/common';
import {DriverService} from "./driver.service";
import {CreateDriverDto} from "../dto/create-driver.dto";
import {ChangeDriverDto} from "../dto/change-driver.dto";

@Controller('driver')
export class DriverController {
    constructor(private readonly driverService: DriverService) {}

    @Get('with-bots')
    async getDriversWithBots(@Res() response){
        const drivers = await this.driverService.getDriversWithBots();
        return response.status(HttpStatus.OK).json({
            drivers,
        });
    }

    @Get(':id')
    async getDriver(@Res() response, @Param('id') id: string) {
        const driver = await this.driverService.getDriver(id);
        return response.status(HttpStatus.OK).json({
            driver,
        });
    }

    @Post()
    // @Header('Content-Type', 'application/json')
    async createDriver(@Res() response, @Body() createDriverDto: CreateDriverDto){
        const driver = await this.driverService.createDriver(createDriverDto)
        return response.status(HttpStatus.CREATED).json({
            driver,
        });
    }

    @Patch(':id')
    async updateDriver(@Res() response, @Body() changeDriverDto: ChangeDriverDto, @Param('id') id: string){
        const driver = await this.driverService.updateDriver(id, changeDriverDto)
        return response.status(HttpStatus.CREATED).json({
            driver,
        });
    }
}
