import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsUrl()
  thumbnail: string;

  @IsString()
  excerpt: string;

  @IsString()
  subCategory: string;
}
