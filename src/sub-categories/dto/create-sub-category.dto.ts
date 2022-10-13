import { IsString } from "class-validator";

export class CreateSubCategoryDto {
  @IsString()
  title: string;

  @IsString()
  category: string;
}
