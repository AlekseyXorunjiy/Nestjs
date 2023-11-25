import { Prop,Schema , SchemaFactory} from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
export type CarDocument = Car & Document

@Schema()
export class Car{
@Prop()
title:string
@Prop({ type: MongooseSchema.Types.ObjectId, ref: 'CarModel' })
model:number
@Prop()
price:number
}
export const CarSchema = SchemaFactory.createForClass(Car);