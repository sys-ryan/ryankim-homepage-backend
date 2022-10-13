import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesService } from "src/categories/categories.service";
import { Repository } from "typeorm";
import { CreateSubCategoryDto } from "./dto/create-sub-category.dto";
import { UpdateSubCategoryDto } from "./dto/update-sub-category.dto";
import { SubCategories } from "./entities/sub-categories.entity";

@Injectable()
export class SubCategoriesService {
  constructor(
    @InjectRepository(SubCategories) private subCategoriesRepository: Repository<SubCategories>,
    private categoriesService: CategoriesService
  ) {}

  async create(createSubCategoryDto: CreateSubCategoryDto): Promise<void> {
    const category = await this.categoriesService.findOneByTitle(createSubCategoryDto.category);

    const subCategory = await this.subCategoriesRepository.create({
      title: createSubCategoryDto.title,
      category,
    });

    await this.subCategoriesRepository.save(subCategory);
  }

  async findAll(): Promise<SubCategories[]> {
    const subCategories = await this.subCategoriesRepository.find();
    return subCategories;
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
