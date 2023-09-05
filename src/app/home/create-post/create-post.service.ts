import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {

  constructor(private http: HttpClient) { }

   uploadPhoto(files:FileList, title:string, body?:string): Observable<any> {
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcxMGU3ZjZjLTFkZWItNDI2ZS1iN2ZmLWFmYTlkYzMyZGI0OCIsImlhdCI6MTY5Mzc1MDgyMSwiZXhwIjoxNjk0MTgyODIxfQ.Sd1xknPsQPq0qHzWeoFMIc0-698W5S6ND_4DcI9_3oA";

    let fileUploadData: FileUploadData[] = [];
      
    
     for(let i = 0; i< files.length; i++){
      const file = files[i];
      console.log(file.type);

      fileUploadData.push({
        path:"path",
        order:i,
        extension:'png',
        type:"image"
      })
     } 

    let fileUploadResponse:FileUploadResponse[] = [];

   return this.http.post<FileUploadResponse[]>('/api/file', fileUploadData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    // // const url = data[0].url;
    // console.log(url);
  
  }

  uploadFile(data : any, files:File){
      console.log(data);

      // for (let file of data) {
      //   // console.log(file.url);
      //   // fData: FormData = new FormData();
      //   const formData = new FormData();
      //   console.log('form Data', formData);
        
      //   formData.append('file', files[file.order]);

      //   console.log(formData, 'form Data');

      //   const headers = new HttpHeaders({
      //     'Accept': '/',
      //     'Content-Type': `image/${file.extension}`,
      //   })

      const file = data[0];
      console.log(data, 'data');
      console.log(files, 'files');


        const headers = new HttpHeaders({
          'Accept': '/',
          'Content-Type': files.type,
        })

        const formData = new FormData();
        console.log('form Data', formData);
        formData.append('file', files);

        
        
          return this.http.request('PUT', file.url, {
            body:files,
            headers:headers
          }).pipe(
            catchError((error: HttpErrorResponse) => {
              return throwError(error);
            })
          );

          // catchError((error: HttpErrorResponse) => {
          //   this.handleErrorResponse(error);
          //   return throwError(error);
          // })
        

        // this.http.put(file.url, formData,{headers}).subscribe((data) => {
        //   console.log(data, 'data');
        // });
      
  }

  // upload(file: File, uploadInfo: any): Observable<any> {
  //   const formData = new FormData;
  //   formData.append("thumbnail", file);
  //   const headers = new HttpHeaders({
  //     'Accept': '/',
  //     'Content-Type': `image/${uploadInfo.extension}`,
  //   })
  //   const requestObject = {
  //     method: "PUT",
  //     url: uploadInfo.url,
  //     options: {
  //       body: file,
  //       headers: headers
  //     }
  //   }
  //   return this.baseService.fetchForFile(requestObject);

  // }
  
}



interface FileUploadData {
  path:string;
  order:number;
  extension:string;
  type:string;
}

interface FileUploadResponse{
  type:string;
  order:number;
  extension:string;
  key:string;
  url:string;
}
      
