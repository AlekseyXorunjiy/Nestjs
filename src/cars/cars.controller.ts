import { Body, Controller ,Get, Param,Put, Post,Delete} from '@nestjs/common';
import { CreateCarDto } from './dto/create-cars.dto';
import { UpdateCarDto } from './dto/update-cars.dto';
import { CarsService } from './cars.service';
import { Car } from "./schemas/cars.schema";

@Controller('cars')
export class CarsController {
    constructor( private readonly carsServices:CarsService){

    }
    @Get()
    getAll():Promise<Car[]>{
       return this.carsServices.getAll()
    }
    @Get(':id')
    getCar(@Param() id:any):Promise<Car>{
        return this.carsServices.getById(id)
    }
    @Post()
    create(@Body() CreateCarDto:CreateCarDto):Promise<Car>{
      return   this.carsServices.create(CreateCarDto)
    }
    @Delete(':id')
     deleteCar(@Param() id:string):Promise<Car>{
        return this.carsServices.remove(id)
     }
     @Put(':id')
     update(@Body() updateCar:UpdateCarDto,@Param('id') id:string):Promise<Car>{
     return this.carsServices.update(id,updateCar)
     }
}
