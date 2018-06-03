import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export class Image{
  id:Number;
  name:string;
  data:string;
}

@Injectable()
export class DataService {
  config: string="http://localhost:8080/ImageUploadService/resources/";
  uploadedImage:Image;
  currentImage:Image;
  imageNames:string[];

  constructor(private http: HttpClient) {
    this.setImageNames();
  }

  uploadImage(img:Image) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    this.http.put(this.config+"images",JSON.stringify(img), httpOptions).subscribe(() =>  this.setImageNames());
   
  }

  deleteImage(name:String) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    this.http.post(this.config+"images?name="+name,null,httpOptions).subscribe(() =>  this.setImageNames());
   
  }

  setCurrentImage(name:string){
    this.http.get(this.config+"images?name="+name).subscribe(
      (data:  Image) => {
        this.currentImage = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  setImageNames(){
    this.http.get(this.config + "imagesList").subscribe(
      (data:  string[]) => {
        this.imageNames = data;
        if(!this.currentImage && data.length>0)
          this.setCurrentImage(data[0]);
      },
      error => {
        console.log(error);
      }
    );
  }
  
}
