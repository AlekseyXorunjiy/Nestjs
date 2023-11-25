import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { DirectoriesForSelectsController } from './directories-for-selects/directories-for-selects.controller';
// import { DirectoryModule } from './directories-for-selects/directory-for-select.module';
// import {GraphQLModule} from "@nestjs/graphql"
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { DirectoriesController } from './directories/directories.controller';
import { CarsModelsModule } from './directories/сar-models/directories.module';

@Module({
  imports: [ 
  //   GraphQLModule.forRoot<ApolloDriverConfig>({
  //   driver: ApolloDriver,
  //   autoSchemaFile: 'schema.gql',
  // }),
  CarsModule,CarsModelsModule,MongooseModule.forRoot('mongodb+srv://bioware73:west457@cluster0.wpsa0b1.mongodb.net/?retryWrites=true&w=majority'),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
