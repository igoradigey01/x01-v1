import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTexnikComponent } from './input-texnik.component';

describe('InputTexnikComponent', () => {
  let component: InputTexnikComponent;
  let fixture: ComponentFixture<InputTexnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTexnikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTexnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
