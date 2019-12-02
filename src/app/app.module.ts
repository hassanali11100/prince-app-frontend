import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';
import {
  GoogleApiModule, 
  NgGapiClientConfig,
  NG_GAPI_CONFIG
} from "ng-gapi";
import { UserService } from './user.service';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "462448410560-68lb5duacivt6d03ta7se6evnrmrki5r.apps.googleusercontent.com",
  discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/storage/v1/rest"],
  scope: [
    "https://www.googleapis.com/auth/cloud-platform.read-only",
    "https://www.googleapis.com/auth/devstorage.full_control"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
