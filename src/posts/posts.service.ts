import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriesService } from "src/categories/categories.service";
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

  // async create(markdown: string, createPostDto: CreatePostDto) {
  //   const category = await this.categoriesService.findOneByTitle(createPostDto.category);
  //   const subCategory = await this.subCategoriesService.findOneByTitle(createPostDto.subCategory);

  //   console.log(createPostDto.thumbnail);
  //   console.log(createPostDto.excerpt);
  //   const newPsot = await this.postsRepository.create({
  //     title: createPostDto.title,
  //     thumbnail: createPostDto.thumbnail,
  //     excerpt: createPostDto.excerpt,
  //     markdown,
  //     category,
  //     subCategory,
  //   });

  //   await this.postsRepository.save(newPsot);

  //   return { message: "The post was successfully created." };
  // }

  async create(createPostDto: CreatePostDto): Promise<void> {
    const { title, category, subCategory, thumbnail, markdown, excerpt } = createPostDto;

    const _category = await this.categoriesService.findOneByTitle(category)
    const _subCategory = await this.subCategoriesService.findOneByTitle(subCategory);

    const newPost = await this.postsRepository.create({
      title,
      thumbnail,
      category: _category,
      subCategory: _subCategory,
      excerpt,
      markdown
    });

    await this.postsRepository.save(newPost);

    return;
  }

  async findAll() {
    // TODO: pagination
    // TODO: filtering
    const posts = await this.postsRepository.find({
      relations: ["category", "subCategory"],
      order: { createdAt: "DESC" },
    });
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postsRepository.findOne({
      where: { id },
      relations: ["category", "subCategory"],
    });
    if (!post) {
      throw new NotFoundException("Post not found.");
    }

    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
