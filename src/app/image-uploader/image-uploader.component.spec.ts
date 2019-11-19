import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderComponent } from './image-uploader.component';

fdescribe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an input tag for choosing file', () => {
    const uploadButtonElement: HTMLElement = fixture.nativeElement;
    const uploadButton = uploadButtonElement.querySelector('input');
    expect(uploadButton.textContent).toEqual('Choose File');
  });

  it('should upload image to google cloud storage', () => {

  });
});
