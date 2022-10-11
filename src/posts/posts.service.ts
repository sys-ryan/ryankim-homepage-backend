import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesService } from "src/categories/categories.service";
import { Categories } from "src/categories/entities/categories.entity";
import { SubCategories } from "src/sub-categories/entities/sub-categories.entity";
import { SubCategoriesService } from "src/sub-categories/sub-categories.service";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { Posts } from "./entities/posts.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postsRepository: Repository<Posts>,
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService
  ) {}

  async create(markdown: string, createPostDto: CreatePostDto) {
    const category = await this.categoriesService.findOneByTitle(createPostDto.category);
    const subCategory = await this.subCategoriesService.findOneByTitle(createPostDto.subCategory);

    const newPsot = await this.postsRepository.create({
      title: createPostDto.title,
      markdown,
      category,
      subCategory,
    });

    await this.postsRepository.save(newPsot);

    return { message: "The post was successfully created." };
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
