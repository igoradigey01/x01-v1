import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleLoginWidgetComponent } from './google-login-widget.component';

describe('GoogleLoginWidgetComponent', () => {
  let component: GoogleLoginWidgetComponent;
  let fixture: ComponentFixture<GoogleLoginWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GoogleLoginWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoogleLoginWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
