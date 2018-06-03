import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService, Image } from "../_services/data.service";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';  
import 'rxjs/add/operator/toPromise';
declare function toast(mes: string, timeout: number, style: string): void;
declare function toggleFullScreen(): void;

@Component({
  selector: "headermenu",
  templateUrl: "./headermenu.component.html",
  styleUrls: ["./headermenu.component.css"]
})
export class HeadermenuComponent implements OnInit {
  selectedFile: File;
  imageNames: String[];

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private dataService:DataService) {
    this.imageNames=dataService.imageNames;
  }

  ngOnInit() {



  }

  toggleFullScreenClick(): void {
    toggleFullScreen();
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.selectedFile);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
      var binaryString = readerEvt.target.result;
      var img=new Image();
      img.name=this.selectedFile.name;
      img.data="data:image/png;base64, "+btoa(binaryString);

      this.dataService.uploadImage(img);
   }

   setCurrentImage(name:string){
     this.dataService.setCurrentImage(name);
   }

   deleteImage(name:string){
     if(this.dataService.currentImage.name==name)this.dataService.currentImage=null;
    this.dataService.deleteImage(name);
    
  }
}
