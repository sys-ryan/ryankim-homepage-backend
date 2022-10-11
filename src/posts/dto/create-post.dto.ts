import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  category: string;

  @IsString()
  subCategory: string;
}
