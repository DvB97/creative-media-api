import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Query, Param } from '@nestjs/common';
import { CreateTareaDTO } from './dto/tarea.dto';
import { TareaService } from './tarea.service';
@Controller('tarea')
export class TareaController {

    constructor(private tareaService : TareaService){

    }

    @Get('/')
    async getTareas(@Res() res){
        const tareas = await this.tareaService.getTareas();        
        res.status(HttpStatus.OK).json({
            tareas : tareas
        })
    }

    @Get('/:tareaID')
    async getTareasById(@Res() res, @Param('tareaID') tareaID){
        const tareas = await this.tareaService.getTareasById(tareaID);
        
        res.status(HttpStatus.OK).json({
            tareas : tareas
        })
    }


    @Post('/create')
    async createPost(@Res() res, @Body() createTareaDTO : CreateTareaDTO){
        const tareaGuardada = await this.tareaService.createTareas(createTareaDTO);
        
        res.status(HttpStatus.OK).json({
            message: 'recibido',
            tarea : tareaGuardada
        })
    }

    

    @Delete('/delete')
    async deleteTareas(@Res() res, @Query('tareaId') tareaId) {
        const tareas = await this.tareaService.deleteTarea(tareaId);
        
        res.status(HttpStatus.OK).json({
            tareas : tareas
        })
    }

    @Put('/update')
    async updateTareas(@Res() res, @Query('tareaId') tareaId, @Body() createTareaDTO : CreateTareaDTO) {
        
        const tareas = await this.tareaService.updateTarea(tareaId,createTareaDTO);
        res.status(HttpStatus.OK).json({
            tareas : tareas
        })
    }
}
