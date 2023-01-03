import {Body, Controller, Get, HttpStatus, Param, Patch, Post, Res} from '@nestjs/common';
import {TaskService} from "./task.service";
import {CreateTaskDto} from "../dto/create-task.dto";
import {ChangeTaskDto} from "../dto/change-task.dto";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get(':id')
    async getTask(@Res() response, @Param('id') id: string) {
        const task = await this.taskService.getTask(id);
        return response.status(HttpStatus.OK).json({
            task,
        });
    }

    @Post()
    // @Header('Content-Type', 'application/json')
    async createTask(@Res() response, @Body() createTaskDto: CreateTaskDto){
        const task = await this.taskService.createTask(createTaskDto)
        return response.status(HttpStatus.CREATED).json({
            task,
        });
    }

    @Patch(':id')
    async updateTask(@Res() response, @Body() changeTaskDto: ChangeTaskDto, @Param('id') id: string){
        const task = await this.taskService.updateTask(id, changeTaskDto)
        return response.status(HttpStatus.CREATED).json({
            task,
        });
    }
}
