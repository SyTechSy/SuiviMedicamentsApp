import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRappelComponent } from './ajouter-rappel.component';

describe('AjouterRappelComponent', () => {
  let component: AjouterRappelComponent;
  let fixture: ComponentFixture<AjouterRappelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRappelComponent]
    });
    fixture = TestBed.createComponent(AjouterRappelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
