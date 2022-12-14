import { Injectable } from "@nestjs/common";
import * as AWS from "aws-sdk";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

@Injectable()
export class UploadsService {
  async uploadFile(file) {
    return file;
  }

  async uploadFiles(files) {
    const response = files.map((file) => file.location);
    return response;
  }
}
