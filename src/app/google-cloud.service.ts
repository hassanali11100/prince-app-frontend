import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {
  // TODO: move http options inside uploadFile and merge params options also
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type':  'image/jpeg',
      'Authorization': 'Bearer ya29.Il-yBww4U_lNN-ceEUkAfOHDOZFxpf1ligxXbVm2Bb8O1It7wWuWjgaS9JxCadD_QB5Zhsdo9OeUg3t4aJQ4GUM9G8jpULPvdx4NZdgc9-YRHCsNns7xD-dbjUuaaP7GAw'
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
        'Authorization': 'Bearer ya29.Il-yBww4U_lNN-ceEUkAfOHDOZFxpf1ligxXbVm2Bb8O1It7wWuWjgaS9JxCadD_QB5Zhsdo9OeUg3t4aJQ4GUM9G8jpULPvdx4NZdgc9-YRHCsNns7xD-dbjUuaaP7GAw'
      })
    }
    return this.httpClient.get<any>(`https://storage.googleapis.com/storage/v1/b/prince_bucket_1/o`, this.httpOptions)
      .pipe(
        tap(images => console.log(images))
      ) as Observable<any>;
  }
}
