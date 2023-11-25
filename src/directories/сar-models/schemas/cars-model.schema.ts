import { Prop,Schema , SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";
export type CarModelsDocument = CarModel & Document

@Schema()
export class CarModel{
@Prop()
label:string

}
export const CarModelSchema = SchemaFactory.createForClass(CarModel);