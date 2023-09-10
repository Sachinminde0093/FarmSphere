import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  constructor(private http: HttpClient) { }

  // selecting image
  fileName?: string;
  imageUrl?: string;
  file?: File;
  getImage(event: any) {
    this.file = event.target.files[0];
    this.getImageUrl(event.target.files[0]);
    this.fileName = event.target.files[0].name;
  }

  getImageUrl(file: File): void {
    this.imageUrl = URL.createObjectURL(file);
  }

  upload() {
    const formData = new FormData;
    console.log(this.file?.size);
    formData.append("thumbnail", this.file!);
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': `image/png`,
      'skipToken': 'true',
    })

    const url = 'https://storage.googleapis.com/letsdev-3b8fc.appspot.com/farm-images/ccbade1d-aeca-4a00-b6d3-24f44d91c576png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=firebase-adminsdk-eqxzs%40letsdev-3b8fc.iam.gserviceaccount.com%2F20230909%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230909T144012Z&X-Goog-Expires=900&X-Goog-SignedHeaders=content-type%3Bhost&X-Goog-Signature=75d9aa0df9540b5441be2a8e2f8e7e1a0fc58bfe0e5fdca98be5f9aa03b87820f9ea61f2a8ac1a1ab7d9dd478bb0b19d2787c0ddf50dfc468ad417a796525ef235ca123c2290be860367dccc42fc817118e12933a8c433aa17672fc442afa726aa7ab63fa18b45e1f007de9109109506b97019a9efce0e8c6a6bf0484ff05451057b652d659f23c7568d4a046119f778cfa0ece6fe01a8d3d1dcb7e350955964f9cd73da16776bb8f569f160b7fe6507090cf750b014493170536d7d1abd7fdd5fffbd94b15518013f15d61aab14987aa87923d1b27fdeac0e5d601ac68b069d6a7ec701b6aac1ef608a278d3152a28922f5ecc1a61d689361cdcafc434fc2c8';
    const req = {
      method: "PUT",
      url: url,
      options: {
        body: this.file,
        headers:headers
      }
    }

    this.http.request(req.method, req.url, req.options).subscribe(
      (data)=>{
        console.log(data);
      },
      (error:any)=>{
        console.log(error);
      }
    )
  }
}