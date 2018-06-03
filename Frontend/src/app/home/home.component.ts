import { Component, OnInit } from "@angular/core";
import { DataService, Image } from "../_services/data.service";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";
declare function toast(mes: string, timeout: number, style: string): void;

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls:["./home.component.css"]
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.dataService.setImageNames(); 
  }

  sanitize(url:string){
    if(url)return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
