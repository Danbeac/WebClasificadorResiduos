import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImageComponent } from './form-image.component';

describe('FormImageComponent', () => {
  let component: FormImageComponent;
  let fixture: ComponentFixture<FormImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
