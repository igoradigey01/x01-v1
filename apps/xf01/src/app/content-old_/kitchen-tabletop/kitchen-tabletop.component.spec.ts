import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenTabletopComponent } from './kitchen-tabletop.component';

describe('KitchenTabletopComponent', () => {
  let component: KitchenTabletopComponent;
  let fixture: ComponentFixture<KitchenTabletopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenTabletopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenTabletopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
