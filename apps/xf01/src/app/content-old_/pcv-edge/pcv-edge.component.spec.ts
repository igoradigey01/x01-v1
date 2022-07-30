import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCVEdgeComponent } from './pcv-edge.component';

describe('PCVEdgeComponent', () => {
  let component: PCVEdgeComponent;
  let fixture: ComponentFixture<PCVEdgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCVEdgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCVEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
