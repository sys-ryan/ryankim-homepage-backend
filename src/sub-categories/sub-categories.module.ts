import { Module } from "@nestjs/common";
import { SubCategoriesService } from "./sub-categories.service";
import { SubCategoriesController } from "./sub-categories.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubCategories } from "./entities/sub-categories.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SubCategories])],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
