import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonajeComponent } from './addpersonaje.component';

describe('AddpersonajeComponent', () => {
  let component: AddpersonajeComponent;
  let fixture: ComponentFixture<AddpersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
