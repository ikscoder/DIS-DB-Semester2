import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export class Image{
  image:string;
  name:string;
}

@Injectable()
export class DataService {
  config: string="localhost:80/api/";
  uploadedImage:Image;
  currentImage:Image;
  imageNames:string[];

  constructor(private http: HttpClient) {

  }

  
}
