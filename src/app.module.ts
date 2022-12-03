import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaModule } from './tarea/tarea.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TareaModule,
    MongooseModule.forRoot('mongodb://localhost/tarea')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
