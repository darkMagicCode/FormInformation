import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBondComponent } from './form-bond.component';

describe('FormBondComponent', () => {
  let component: FormBondComponent;
  let fixture: ComponentFixture<FormBondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
