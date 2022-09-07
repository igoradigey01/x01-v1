import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersMainComponent } from './user-orders-main.component';

describe('UserOrdersMainComponent', () => {
  let component: UserOrdersMainComponent;
  let fixture: ComponentFixture<UserOrdersMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrdersMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserOrdersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
