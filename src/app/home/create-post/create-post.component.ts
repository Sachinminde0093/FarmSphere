import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

 postType: postType = postType.TEXT;
 


  changeType (type: postType) {
    this.postType= type;
  }

  imagePreviewSrc: string | ArrayBuffer | null | undefined = '';
  isImageSelected: boolean = false;
  selectedFile!: File;

   imageList: (string | ArrayBuffer | null | undefined)[] = [undefined];

  onFileUpload(event: Event) {

    let selectedFile = (event.target as HTMLInputElement).files?.item(0)
    let selectedFiles = (event.target as HTMLInputElement).files;


    // if (selectedFile) {
      
    //   if (["image/jpeg", "image/png", "image/svg+xml"].includes(selectedFile.type)) {
    //     let fileReader = new FileReader();
    //     fileReader.readAsDataURL(selectedFile);

    //     fileReader.addEventListener('load', (event) => {
    //       this.imagePreviewSrc = event.target?.result;
    //       this.isImageSelected = true
    //     })
    //   }
    // } else {
    //   this.isImageSelected = false
    // }

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
      if(!this.isImageSelected){
      this.imageList.splice(0, 1);
      }
      this.isImageSelected = true
    } 
  }




}

enum postType { 
  TEXT,
  IMAGE,
  VIDEO
}