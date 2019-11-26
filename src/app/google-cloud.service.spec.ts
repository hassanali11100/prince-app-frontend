import { TestBed } from '@angular/core/testing';

import { GoogleCloudService } from './google-cloud.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';

fdescribe('GoogleCloudService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let googleCloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        GoogleCloudService
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    googleCloudService = TestBed.get(GoogleCloudService);
  });

  it('should be created', () => {
    const service: GoogleCloudService = TestBed.get(GoogleCloudService);
    expect(service).toBeTruthy();
  });

  it('should upload file on google storage', () => {
    const stubbedResponse = {
      "kind": "storage#object",
      "id": "prince_bucket_1/sampleImage4.png/1574777290444466",
      "selfLink": "https://www.googleapis.com/storage/v1/b/prince_bucket_1/o/sampleImage4.png",
      "mediaLink": "https://storage.googleapis.com/download/storage/v1/b/prince_bucket_1/o/sampleImage4.png?generation=1574777290444466&alt=media",
      "name": "sampleImage4.png",
      "bucket": "prince_bucket_1",
      "generation": "1574777290444466",
      "metageneration": "1",
      "contentType": "image/jpeg",
      "storageClass": "STANDARD",
      "size": "6598",
      "md5Hash": "RA1LJLqYsevoqm2gy3S6Nw==",
      "crc32c": "7CPeMg==",
      "etag": "CLKd/ceGiOYCEAE=",
      "timeCreated": "2019-11-26T14:08:10.444Z",
      "updated": "2019-11-26T14:08:10.444Z",
      "timeStorageClassUpdated": "2019-11-26T14:08:10.444Z"
    };
    const testBinaryFile = new File([''], 'Test File');

    googleCloudService.uploadFile(testBinaryFile).subscribe(
      data => expect(data).toEqual(stubbedResponse)
    );

    const req = httpTestingController.expectOne('https://storage.googleapis.com/upload/storage/v1/b/prince_bucket_1/o');
    expect(req.request.method).toEqual('POST');

    req.flush(stubbedResponse);
  });
});
