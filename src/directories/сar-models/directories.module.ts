import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { CarModel,CarModelSchema } from "./schemas/cars-model.schema";
import { DirectoriesController } from "./directories.controller";
import { DirectoriesService } from "./directories.service";

@Module({
    providers:[DirectoriesService],
    controllers:[DirectoriesController],
    imports: [MongooseModule.forFeature([{ name: CarModel.name, schema: CarModelSchema}])],
})
export class CarsModelsModule{

}