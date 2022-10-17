import { Transform } from "class-transformer";
import { IsEmail, IsString } from "class-validator";
import * as sanitizeHtml from "sanitize-html";

export class CreateQuestionDto {
  @IsString()
  @Transform(({ value }) => {
    return sanitizeHtml(value, {
      allowedTags: [],
      allowedAttributes: {},
    });
  })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Transform(({ value }) => {
    return sanitizeHtml(value, {
      allowedTags: [],
      allowedAttributes: {},
    });
  })
  message: string;
}
