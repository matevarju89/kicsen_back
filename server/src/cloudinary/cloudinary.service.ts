import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: Express.Multer.File
  ): Promise<{ url: string; public_id: string } | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        const uploadURL = result?.url;
        const publicID = result?.public_id;
        if (
          typeof uploadURL === 'undefined' ||
          typeof publicID === 'undefined'
        ) {
          reject({
            message: 'Cloudinary service error',
            name: 'server_error',
            http_status: 500,
          });
        } else {
          resolve({ url: uploadURL, public_id: publicID });
        }
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}
