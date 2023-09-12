import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }


  generatUrls(files: FileList): Observable<FileUploadResponse[]> {

    let fileUploadData: FileUploadData[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file.type);
      fileUploadData.push({
        path: "path",
        order: i,
        extension: 'png',
        type: "image"
      });
    }

    let fileUploadResponse: FileUploadResponse[] = [];

    return this.http.post<FileUploadResponse[]>('/api/file/generate-url', fileUploadData);

  }

  async uploadFile(data: FileUploadResponse[], files: FileList, id: string, type: string) {
    console.log(files);
    for (let file of data) {

      const formData = new FormData;
      const ufile = files[file.order];
      console.log(ufile?.size);
      formData.append("thumbnail", ufile!);
      const headers = new HttpHeaders({
        'Accept': '*/*',
        'Content-Type': `image/png`,
        'skipToken': 'true',
      })

      const req = {
        method: "PUT",
        url: file.url,
        options: {
          body: ufile,
          headers: headers
        }
      }

      this.http.request(req.method, req.url, req.options).subscribe(
        (data) => {

          let body: Object;

          if (type === 'user') {
            body = {
              "user_id": id,
              "file": {
                "key": file.key,
                "extension": file.extension,
                "order": file.order,
                "type": "image"
              }
            };
          } else {
            body = {
              "post_id": id,
              "file": {
                "key": file.key,
                "extension": file.extension,
                "order": file.order,
                "type": "image"
              }
            };
          }
          this.http.request('POST', `/api/file/save/${type}`, { body: body }).subscribe(
            (save) => {
              console.log(save);
            }
          );
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}

interface FileUploadData {
  path: string;
  order: number;
  extension: string;
  type: string;
}

interface FileUploadResponse {
  type: string;
  order: number;
  extension: string;
  key: string;
  url: string;
}

