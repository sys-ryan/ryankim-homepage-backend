import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from "@nestjs/common";
import { SubCategoriesService } from "./sub-categories.service";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";
import { SubCategories } from "./entities/sub-categories.entity";

@Controller("sub-categories")
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createSubCategoryDto: CreateSubCategoryDto): Promise<void> {
    return this.subCategoriesService.create(createSubCategoryDto);
  }

  @Get()
  findAll(): Promise<SubCategories[]> {
    return this.subCategoriesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.subCategoriesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    return this.subCategoriesService.update(+id, updateSubCategoryDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.subCategoriesService.remove(+id);
  }
}
