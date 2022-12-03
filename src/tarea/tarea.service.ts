import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tarea } from './interfaces/tarea.interface';
import { CreateTareaDTO } from './dto/tarea.dto';

@Injectable()
export class TareaService {
    constructor(@InjectModel('Tarea') private readonly tareaModel : Model<Tarea>){

        
    }

    async getTareas() : Promise<Tarea[]>{
        const tareas = await this.tareaModel.find();        
        return tareas;         
    }

    async getTareasById(tareaID) : Promise<Tarea>{
        const tareas = await this.tareaModel.findById(tareaID);
        return tareas;         
    }

    async createTareas (createTareaDTO : CreateTareaDTO) : Promise<Tarea>{
        const tarea = new this.tareaModel(createTareaDTO);
        await tarea.save()
        return tarea;
    }

    async deleteTarea(tareaId : String): Promise<Tarea>{
        const tarea = await this.tareaModel.findByIdAndDelete(tareaId)
        return tarea
    }

    async updateTarea(tareaId : String, createTareaDTO : CreateTareaDTO) : Promise <Tarea>{        
        const tarea =  this.tareaModel.findByIdAndUpdate(tareaId,createTareaDTO)
        return tarea
    }

}
