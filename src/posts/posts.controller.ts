import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpCode,
} from "@nestjs/common";
import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @HttpCode(201)
  @UseInterceptors(FileInterceptor("markdown"))
  create(@UploadedFile() file: Express.Multer.File, @Body() createPostDto: CreatePostDto) {
    const markdown = file.buffer.toString();

    return this.postsService.create(markdown, createPostDto);
  }

  @Get()
  findAll() {
    // TODO: pagination
    // TODO: filtering
    return this.postsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postsService.remove(+id);
  }
}
