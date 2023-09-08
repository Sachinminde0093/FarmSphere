import { Component } from '@angular/core';
import { CreatePostService } from './create-post.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  postType: postType = postType.TEXT;

  title: string = '';

  body: string = '';

  constructor(private createPostServicecre: CreatePostService, private http: HttpClient) { }

  changeType(type: postType) {
    this.postType = type;
  }

  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  selectedfiles: (FileList | null) = null;

  imageList: (string | ArrayBuffer | null | undefined)[] = [undefined];


  onFileUpload(event: Event) {

    let selectedFile = (event.target as HTMLInputElement).files?.item(0)
    let selectedFiles = (event.target as HTMLInputElement).files;
    this.selectedfiles = (event.target as HTMLInputElement).files;

    if (selectedFiles?.length) {
      let lt: number = selectedFiles!.length;
      //  selectedFile  = selectedFiles.item(0)!;
      for (let i = 0; i < lt; i++) {
        let selectedFile = selectedFiles.item(i);

        if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile!.type)) {
          let fileReader = new FileReader();
          fileReader.readAsDataURL(selectedFile!);

          fileReader.addEventListener('load', (event) => {

            this.imageList.push(event.target?.result)
          })
        }
        // this.roomsService.uploadToFirebase(selectedFiles.item(0)!);
      }

      // selectedFile = this.imageList[0]
      if (!this.isImageSelected) {
        this.imageList.splice(0, 1);
      }
      this.isImageSelected = true
    }

  }



  async post() {

    const file = this.selectedfiles![0];

    this.createPostServicecre.uploadPhoto(this.selectedfiles!).subscribe(
      (data) => {
        const formData = new FormData();
        formData.append('file', file);

        const headers = new HttpHeaders({
          'Content-Type': "image/png",
        })
        console.log(file.size);
        console.log(formData);

        this.http.put(data[0].url, {
          body: formData,
          headers: headers
        }).subscribe((data) => {
          console.log(data);
        })
      }
    );

    // const headers = new HttpHeaders({
    //   'Content-Type': "image/png",
    // })

    // const formData = new FormData();

    // console.log('form Data', formData);

    // formData.append('file', file);


    // const url = "https://storage.googleapis.com/myhousehub-f2120.appspot.com/images/5a077f9c-e492-4b6b-8496-44da94ba1cb3png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-5g447%40myhousehub-f2120.iam.gserviceaccount.com%2F20230903%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230903T172038Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=b726d39f93354716cc83ff22d800a5042d18a5dc174a8910669a206cc9cdfbc5b97060df939a7881c3c7b05599ff4f3f7f1c524b78ea7930ef1275ac110a8591af96f5b4581e3f1eb757dc0c2c34c29bf4c4e4e46e946cd1aab2941cd34d53d6d43e923bda9a3ebe92417538c6acd8cff1aaea923d4f33cde546c645a29fdf1b08290d930def3523989ee687519c2f3ecd4867c7ab63dd0456049ca83d2a996e8b7b7cdb4e3c40899911f41daeeb0f595c178a78e3cac26b45a8ed631e7398834582bf6ac62e886e5e75d85d63fa9151e6996d801a3a9e80c8338efb5bf5b5b661cc3e8b0f83469e6de4f2023c317f072f9090b0faf4ea300cca83ec7b3cc035";

    // this.http.request('PUT', url, {
    //     body:formData,
    //     headers:headers
    //   }).subscribe((data)=>{
    //     console.log(data);
    //   } )

    // this.createPostServicecre.uploadPhoto(this.selectedfiles!, this.title, this.body).subscribe(
    //   (data)=>{
    //     console.log(data, 'file uplload resposnse');
    //     this.createPostServicecre.uploadFile(data,this.selectedfiles![0]).subscribe(
    //       (data)=>{
    //         console.log(data);
    //       }
    //     );
    //   }
    // );
  }

  uploadBinaryData(file: File) {
    const url = "https://storage.googleapis.com/myhousehub-f2120.appspot.com/images/5a077f9c-e492-4b6b-8496-44da94ba1cb3png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-5g447%40myhousehub-f2120.iam.gserviceaccount.com%2F20230903%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230903T172038Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=b726d39f93354716cc83ff22d800a5042d18a5dc174a8910669a206cc9cdfbc5b97060df939a7881c3c7b05599ff4f3f7f1c524b78ea7930ef1275ac110a8591af96f5b4581e3f1eb757dc0c2c34c29bf4c4e4e46e946cd1aab2941cd34d53d6d43e923bda9a3ebe92417538c6acd8cff1aaea923d4f33cde546c645a29fdf1b08290d930def3523989ee687519c2f3ecd4867c7ab63dd0456049ca83d2a996e8b7b7cdb4e3c40899911f41daeeb0f595c178a78e3cac26b45a8ed631e7398834582bf6ac62e886e5e75d85d63fa9151e6996d801a3a9e80c8338efb5bf5b5b661cc3e8b0f83469e6de4f2023c317f072f9090b0faf4ea300cca83ec7b3cc035";

    const headers = new HttpHeaders({
      'Content-Type': 'application/octet-stream', // Set the content type to binary
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Add any required headers
    });

    const options = {
      headers: headers,
      // Change this based on the response type you expect
    };

    // Read the file as binary data
    const reader = new FileReader();
    reader.onload = () => {
      // Create an ArrayBuffer from the binary data
      const arrayBuffer = reader.result as ArrayBuffer;

      // Send the binary data in the request body
      this.http.put(url, arrayBuffer, options).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        }
      );
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsArrayBuffer(file);
  }

}

enum postType {
  TEXT,
  IMAGE,
  VIDEO
}