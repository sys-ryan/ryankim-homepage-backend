import { Transform } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import * as sanitizeHtml from "sanitize-html";

export class CreateQuestionDto {
  @IsString()
  @Transform(({ value }) => {
    let data = sanitizeHtml(value);
    data = data.trim();
    return data;
  })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => {
    let data = sanitizeHtml(value);
    data = data.trim();
    return data;
  })
  message: string;
}
