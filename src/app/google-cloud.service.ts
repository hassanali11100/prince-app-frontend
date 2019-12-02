import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { GoogleApiService } from 'ng-gapi';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  
  accessToken;

  constructor(private httpClient: HttpClient, userService: UserService) {
    this.accessToken = userService.getToken();
    }

    httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type':  'image/jpeg',
        'Authorization': `Bearer ${this.accessToken}`
      })
    }

  uploadFile(file: File) {
    this.httpOptions['params'] = new HttpParams()
      .append('uploadType', 'media')
      .append('name', 'sampleImage6.png')
    return this.httpClient.post<any>(`https://storage.googleapis.com/upload/storage/v1/b/prince_bucket_1/o`,
     file, this.httpOptions)
      .pipe(
        tap(image => console.log(image))
      ) as Observable<any>;
  }

  listFiles() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      })
    }
    return this.httpClient.get<any>(`https://storage.googleapis.com/storage/v1/b/prince_bucket_1/o`, this.httpOptions)
      .pipe(
        tap(images => console.log(images))
      ) as Observable<any>;
  }
}
