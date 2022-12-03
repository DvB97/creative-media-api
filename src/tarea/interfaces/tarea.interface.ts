import { Document } from "mongoose";

export interface Tarea extends Document {
    nombre : String;
    estado : Number
}