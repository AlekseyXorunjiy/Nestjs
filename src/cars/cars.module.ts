import { Module } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchema,Car } from "./schemas/cars.schema";

@Module({
providers:[CarsService],
controllers:[CarsController],
imports: [MongooseModule.forFeature([{ name: Car.name, schema: CarSchema}])],
})
export class CarsModule{

}