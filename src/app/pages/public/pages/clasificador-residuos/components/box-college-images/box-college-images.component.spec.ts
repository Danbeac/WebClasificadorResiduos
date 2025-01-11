import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCollegeImagesComponent } from './box-college-images.component';

describe('BoxCollegeImagesComponent', () => {
  let component: BoxCollegeImagesComponent;
  let fixture: ComponentFixture<BoxCollegeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxCollegeImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxCollegeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
