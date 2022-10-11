import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from "./entities/posts.entity";
import { Categories } from "src/categories/entities/categories.entity";
import { SubCategories } from "src/sub-categories/entities/sub-categories.entity";
import { CategoriesModule } from "src/categories/categories.module";
import { SubCategoriesModule } from "src/sub-categories/sub-categories.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts, Categories, SubCategories]),
    CategoriesModule,
    SubCategoriesModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
