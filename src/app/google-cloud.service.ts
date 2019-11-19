import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleCloudService {

  constructor() { }

  uploadFile(file) {
    console.log(file)
  }
}
