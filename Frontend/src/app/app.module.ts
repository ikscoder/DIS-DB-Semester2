import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { MaterializeModule } from "angular2-materialize";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HeadermenuComponent } from "./headermenu/headermenu.component";
import { DataService } from "./_services/data.service";
import { FooterComponent } from "./footer/footer.component";
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "**", component: NotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      MaterializeModule
    ],
    declarations: [
      AppComponent,
      HeadermenuComponent,
      HomeComponent,
      FooterComponent,
      NotFoundComponent
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
  })
  export class AppModule {}