import { IsEnum, IsNumber, IsString, IsUrl } from "class-validator";
import { POST_CATEGORY } from "src/common/enums/post-category.enum";
import { POST_SUBCATEGORY } from "src/common/enums/post-subCategory.enum";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsEnum(POST_CATEGORY)
  category: string;

  @IsUrl()
  thumbnail: string;

  @IsString()
  markdown: string;

  @IsString()
  excerpt: string;

  @IsEnum(POST_SUBCATEGORY)
  subCategory: string;
}
