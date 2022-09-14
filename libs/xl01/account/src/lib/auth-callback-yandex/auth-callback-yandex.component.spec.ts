import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCallbackYandexComponent } from './auth-callback-yandex.component';

describe('AuthCallbackYandexComponent', () => {
  let component: AuthCallbackYandexComponent;
  let fixture: ComponentFixture<AuthCallbackYandexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthCallbackYandexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthCallbackYandexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
