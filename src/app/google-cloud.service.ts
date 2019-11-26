import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'image/jpeg',
      'Authorization': 'Bearer ya29.Il-yB9q08s0COqI-JkOYYx3Kk5-iev9NHrXPbuPG_YmRhhQcJl4lNLpgs_fpOiSPO433jqAihRD3OQNKAj96Kes86NHBmlBVmiQFrcH8DAvB5bgY-tyVRNd0x00znQmk8A'
    }),
    params: new HttpParams()
      .append('uploadType', 'media')
      .append('name', 'sampleImage6.png')
  }

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File) {
    return this.httpClient.post<any>(`https://storage.googleapis.com/upload/storage/v1/b/prince_bucket_1/o`,
     file, this.httpOptions)
      .pipe(
        tap(question => console.log(question))
      ) as Observable<any>;
  }
}
