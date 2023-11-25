import { Injectable } from "@nestjs/common";
import { CarModel, CarModelsDocument } from "./schemas/cars-model.schema";
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose"
import { CreateCarDto } from "src/cars/dto/create-cars.dto";


@Injectable()

export class DirectoriesService{
    constructor(@InjectModel(CarModel.name) private directory: Model<CarModelsDocument>) {
    }
    async getAll():Promise<CarModel[]>{
    return this.directory.find().exec()
    }
    async createCarModel(CreateCarDto:CreateCarDto):Promise<CarModel>{
        const newCarModel = new this.directory(CreateCarDto)
        return newCarModel.save()
    }
}