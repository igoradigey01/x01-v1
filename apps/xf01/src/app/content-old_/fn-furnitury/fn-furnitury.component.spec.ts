import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnFurnituryComponent } from './fn-furnitury.component';

describe('FnFurnituryComponent', () => {
  let component: FnFurnituryComponent;
  let fixture: ComponentFixture<FnFurnituryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FnFurnituryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FnFurnituryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
