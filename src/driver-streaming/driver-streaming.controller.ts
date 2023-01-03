import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import {DriverStreamingService} from "./driver-streaming.service";

@Controller()
export class DriverStreamingController {
    constructor(private readonly  driverStreaming: DriverStreamingService) {}

    @Get('all-data/:id')
    async getAllDataFromDriver(@Res() response, @Param('id') id: string){
        const driver = await this.driverStreaming.getAllDataFromDriver(id);
        return response.status(HttpStatus.OK).json({
            driver,
        });
    }
}
