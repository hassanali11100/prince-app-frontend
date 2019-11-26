import { Component, OnInit } from '@angular/core';
import { GoogleCloudService } from '../google-cloud.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  constructor(private googleCloudService: GoogleCloudService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    const selectedFile = event.target.files[0]
    console.log(selectedFile);
    this.googleCloudService.uploadFile(selectedFile).subscribe(
      data => console.log(data)
    )
  }
}
