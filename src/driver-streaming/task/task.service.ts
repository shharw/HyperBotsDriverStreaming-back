import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Task} from "../models/task.model";
import {CreateTaskDto} from "../dto/create-task.dto";
import {ChangeTaskDto} from "../dto/change-task.dto";

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Task)
        private taskModel: typeof Task,
    ) {}

    async getTask(id: string): Promise<Task> {
        return await this.taskModel.findOne({
            where: {
                id,
            }
        });
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const task = new Task();
        task.description = createTaskDto.description;
        return task.save()
    }

    async updateTask(id: string, changeTaskDto: ChangeTaskDto): Promise<[affectedCount: number, affectedRows: Task[]]>{
        const task = await this.taskModel.update(
            {...changeTaskDto},
            {
                where:{
                    id
                },
                returning: true
            }
        )
        return task;
    }

}
