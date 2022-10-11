import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";
import { SubCategories } from "./entities/sub-categories.entity";

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategories) private subCategoriesRepository: Repository<SubCategories>
  ) {}

  create(createSubCategoryDto: CreateSubCategoryDto) {
    return "This action adds a new subCategory";
  }

  findAll() {
    return `This action returns all subCategories`;
  }

  findOne(id: number) {
    return `find one sub category`;
  }

  async findOneByTitle(title: string) {
    const subCategory = await this.subCategoriesRepository.findOne({ where: { title } });
    if (!subCategory) {
      throw new NotFoundException("SubCategory not found.");
    }

    return subCategory;
  }

  update(id: number, updateSubCategoryDto: UpdateSubCategoryDto) {
    return `This action updates a #${id} subCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategory`;
  }
}
