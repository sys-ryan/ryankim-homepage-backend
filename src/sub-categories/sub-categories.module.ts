import { Module } from "@nestjs/common";
import { SubCategoriesService } from "./sub-categories.service";
import { SubCategoriesController } from "./sub-categories.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubCategories } from "./entities/sub-categories.entity";
import { CategoriesModule } from "src/categories/categories.module";

@Module({
  imports: [TypeOrmModule.forFeature([SubCategories]), CategoriesModule],
  controllers: [SubCategoriesController],
  providers: [SubCategoriesService],
  exports: [SubCategoriesService],
})
export class SubCategoriesModule {}
