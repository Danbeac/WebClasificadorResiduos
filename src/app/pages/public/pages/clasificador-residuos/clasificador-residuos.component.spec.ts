import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificadorResiduosComponent } from './clasificador-residuos.component';

describe('ClasificadorResiduosComponent', () => {
  let component: ClasificadorResiduosComponent;
  let fixture: ComponentFixture<ClasificadorResiduosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasificadorResiduosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasificadorResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
