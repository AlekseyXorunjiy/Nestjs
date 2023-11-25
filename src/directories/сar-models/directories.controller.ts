import { Body, Controller ,Get, Param,Put, Post,Delete} from '@nestjs/common';
import { DirectoriesService } from './directories.service';
import { CreateCarDto } from 'src/cars/dto/create-cars.dto';
import { CarModel } from './schemas/cars-model.schema';
@Controller('directories-cars')
export class DirectoriesController {
    constructor( private readonly directoryService:DirectoriesService){
    }
    @Get()
    getDirectoryCarModels():Promise<CarModel[]>{
    return this.directoryService.getAll()
    }
    
    @Post()
    createDirectoryCarsModels(@Body() CreateCarDto:CreateCarDto):Promise<CarModel>{
        return this.directoryService.createCarModel(CreateCarDto)
    }
}
