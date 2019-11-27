import { Component, OnInit } from '@angular/core';
import { GoogleCloudService } from '../google-cloud.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {
  images = [];
  constructor(private googleCloudService: GoogleCloudService) { }

  ngOnInit() {
    this.googleCloudService.listFiles().subscribe(
      data => this.images = (data) ? data.items : []
    )
  }

}
