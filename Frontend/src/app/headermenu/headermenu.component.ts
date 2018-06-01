import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  base64textString:String="";

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {



  }

  toggleFullScreenClick(): void {
    toggleFullScreen();
  }

  onFileChanged(event: { target: { files: { [x: string]: File; }; }; }) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(this.selectedFile);
  }
  }

  _handleReaderLoaded(readerEvt: { target: { result: any; }; }) {
      var binaryString = readerEvt.target.result;
      this.base64textString= "data:image/png;base64, "+btoa(binaryString);
   }


}
