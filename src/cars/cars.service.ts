import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose"
import { CreateCarDto } from "./dto/create-cars.dto";
import { Car, CarDocument } from "./schemas/cars.schema";
import { Model } from 'mongoose';
import { UpdateCarDto } from "./dto/update-cars.dto";

@Injectable()
export class CarsService {
    // мы тут говорим ,какую модель из какой коллекции нам нужно заинжектировать
    constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {

    }
    async getAll(): Promise<Car[]> {
        return this.carModel.find().populate('model').exec();
        // populate('model') говорит Mongoose о том, что поле model в объекте Car должно быть заполнено данными из коллекции CarModel
        // Обратите внимание, что populate работает только для полей, объявленных с использованием ref в схеме. В вашей схеме Car, поле model описано как:
        // @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'CarModel' })
// model: MongooseSchema.Types.ObjectId
    }

    async getById(id: string): Promise<Car> {
        return this.carModel.findById(id)
    }
    async create(carDto: CreateCarDto): Promise<Car> {
        const newCar = new this.carModel(carDto)
        return newCar.save()
    }
    async remove(id:string):Promise<Car>{
        return this.carModel.findByIdAndRemove(id)
    }
    async update(id:string,carDto:UpdateCarDto):Promise<Car>{
        return this.carModel.findByIdAndUpdate(id,carDto,{new:true})
    }
    // You can add methods and logic related to car services here
}
