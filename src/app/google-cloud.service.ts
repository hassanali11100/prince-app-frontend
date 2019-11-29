import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  // TODO: move http options inside uploadFile and merge params options also
  accessToken = 'ya29.Il-zB1sTey93_6RCPOknJVwUMq9K7LTPTkZKlY0rCLFKWmGpIYQUo5UVXMji3M_2RJ3lC4kiO8-NLtOOzx1w3RHuF-5Sdz9a-HL5rSmzlZbdS61vPp1dYPGfhAUg2npgJw';
  refreshToken = '1//04pLeyDCjjpsICgYIARAAGAQSNwF-L9Irb3PjYlR7RV4dR43prKcnEiESzFpVdPgWWpXBZzD47tl9ZxAFHIxT89qVaudvxp_ywoM';
  tokenuri = 'https://www.googleapis.com/oauth2/v4/token'
  
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'image/jpeg',
      'Authorization': `Bearer ${this.accessToken}`
    })
  }

  constructor(private httpClient: HttpClient) { }

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

  refreshAccesstoken() {
    let body = {
      token_uri: "https://www.googleapis.com/oauth2/v4/token",
      refresh_token: `${this.refreshToken}`
    }
    return this.httpClient.post<any>(`https://developers.google.com/oauthplayground/refreshAccessToken`,
     body) as Observable<any>;
  }
}
