import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Categories } from "./entities/categories.entity";

@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) private categoriesRepository: Repository<Categories>) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<void> {
    const category = await this.categoriesRepository.create(createCategoryDto);
    await this.categoriesRepository.save(category);
  }

  async findAll(): Promise<Categories[]> {
    const categories = await this.categoriesRepository.find();

    return categories;
  }

  findOne(id: number) {
    return `find one category `;
  }

  async findOneByTitle(title: string) {
    const category = await this.categoriesRepository.findOne({
      where: { title },
    });

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
