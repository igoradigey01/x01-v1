import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceFurnituryComponent } from './face-furnitury.component';

describe('FaceFurnituryComponent', () => {
  let component: FaceFurnituryComponent;
  let fixture: ComponentFixture<FaceFurnituryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceFurnituryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceFurnituryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
