import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderComponent } from './image-uploader.component';
import { GoogleCloudService } from '../google-cloud.service';

fdescribe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;
  let spyGoogleCloudService;

  beforeEach(async(() => {
    const spyGoogleCloudObj = jasmine.createSpyObj('GoogleCloudService', ['uploadFile'])
    
    TestBed.configureTestingModule({
      declarations: [ ImageUploaderComponent ],
      providers: [{
        provide: GoogleCloudService, useValue: spyGoogleCloudObj
      }]
    })
    .compileComponents();


    spyGoogleCloudService = TestBed.get(GoogleCloudService);
    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input tag for choosing file', () => {
    const uploadButtonElement: HTMLElement = fixture.nativeElement;
    const uploadButton = uploadButtonElement.querySelector('input');
    // TODO: write some good expectation
    expect(uploadButton.textContent).toEqual('');
  });

  it('selectedFile() method receives the file', () => {
    const uploadButtonElement: HTMLElement = fixture.nativeElement;
    const uploadButton = uploadButtonElement.querySelector('input');
    spyOn(component, 'onFileSelected');
    uploadButton.dispatchEvent(new Event('change'));
    expect(component.onFileSelected).toHaveBeenCalled();
  });

  it('should pass file to google cloud service for uploading', () => {
    spyGoogleCloudService.uploadFile.and.returnValue('');
    component.onFileSelected({target: {files: [{name: 'TestFile', size: '2300'}]}})
    expect(spyGoogleCloudService.uploadFile).toHaveBeenCalled()
  });
});
