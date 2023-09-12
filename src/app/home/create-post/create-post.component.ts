import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileService } from 'src/app/services/file.service';
import { PostListService } from 'src/app/services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  postType: string = PostType[0];

  title: string = '';

  body: string = '';

  constructor(private postService:PostListService , private http: HttpClient, private fileService: FileService, private router:Router) { }

  changeType(type: string) {
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
      }
      if (!this.isImageSelected) {
        this.imageList.splice(0, 1);
      }
      this.isImageSelected = true
    }

  }

  async post() {
    
  this.postService.createPost(this.title, this.body, this.postType).subscribe(
    (post)=>{
      if(this.imageList.length > 0){

         this.fileService.generatUrls(this.selectedfiles!).subscribe(
          async (data)=>{
            await this.fileService.uploadFile(data, this.selectedfiles!,post.post_id, 'post');
            this.router.navigate(['/home']);
          }
        );
      }
    }
    
  )

    
  }
}

 const  PostType = [
  'image',
  'text',
  'video'
 ]

