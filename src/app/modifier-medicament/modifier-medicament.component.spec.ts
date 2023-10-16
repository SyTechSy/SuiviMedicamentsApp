import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMedicamentComponent } from './modifier-medicament.component';

describe('ModifierMedicamentComponent', () => {
  let component: ModifierMedicamentComponent;
  let fixture: ComponentFixture<ModifierMedicamentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierMedicamentComponent]
    });
    fixture = TestBed.createComponent(ModifierMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
