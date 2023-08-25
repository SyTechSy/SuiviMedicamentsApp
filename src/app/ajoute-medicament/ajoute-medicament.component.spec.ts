import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteMedicamentComponent } from './ajoute-medicament.component';

describe('AjouteMedicamentComponent', () => {
  let component: AjouteMedicamentComponent;
  let fixture: ComponentFixture<AjouteMedicamentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouteMedicamentComponent]
    });
    fixture = TestBed.createComponent(AjouteMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

it('should create', () => {
    expect(component).toBeTruthy();
  });
});
