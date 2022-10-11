import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import * as multerS3 from "multer-s3";
import * as AWS from "aws-sdk";
import { UploadsService } from "./uploads.service";
import * as dotenv from "dotenv";

dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

console.log(process.env.NODE_ENV);
console.log(process.env.AWS_S3_BUCKET_NAME);

const s3 = new AWS.S3();

@Controller("uploads")
export class UploadsController {
  constructor(private uploadsService: UploadsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("file", {
      storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_S3_BUCKET_NAME,
        acl: "public-read",
        key: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    })
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadsService.uploadFile(file);
  }
}
