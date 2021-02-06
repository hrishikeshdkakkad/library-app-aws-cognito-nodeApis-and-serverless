import * as AWS from 'aws-sdk';
import { config } from '../config/app.config';
import { ParamsToUploadToS3 } from '../utils/util';
const s3 = new AWS.S3();

class S3Operations {
  async uploadToS3(image: Buffer, documentType: string, fileName: string, fileMime: string): string {
    const detectedMime = fileMime;
    const name = fileName;

    const key = `${documentType}-${name}`;

    console.log(`writing image to bucket called ${key}`);
    await s3.putObject(ParamsToUploadToS3(image, key, detectedMime, config.s3.bucket)).promise();

    const url = `https://${config.s3.bucket}.
          s3-${config.s3.region}.
          amazonaws.com/${key}`;

    return url;
  }
}

export const s3ops = new S3Operations();
