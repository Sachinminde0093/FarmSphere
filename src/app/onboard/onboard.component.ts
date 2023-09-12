import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FileService } from '../services/file.service';
import User from '../home/profile/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent {


    constructor(private userService:UserService,  private fileService:FileService, private router: Router){

    }
  

  userData = {
    username: '',
    bio: '',
    first_name: '',
    last_name: ''
  };

  selectedFiles: FileList | null = null;
  selectedFile: File | null = null;
  selectedFileUrl: string | null = null;

  submitForm() {
    if(this.userData.username !== ''  && this.userData.bio !== '' && this.userData.first_name !== '' && this.userData.last_name !== '' && this.selectedFile){

      this.fileService.generatUrls(this.selectedFiles!).subscribe(
       async (data)=>{

          console.log(data);

          const user : User = JSON.parse(localStorage.getItem('user')!);
          console.log(user);
          await this.fileService.uploadFile(data,this.selectedFiles!, user.user_id,'user' );
          this.userService.updateUser(this.userData).subscribe(
            (data)=>{
              console.log(data);
              localStorage.setItem('user', JSON.stringify(data));
              this.router.navigate(['/home']);
            }
          )
        }
      );

   
    }
  }

  onFileSelected(event: any) {
       this.selectedFiles =  event.target.files;
       console.log(this.selectedFiles?.length);
     this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedFileUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

}
