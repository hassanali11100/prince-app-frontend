import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageUploaderComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
