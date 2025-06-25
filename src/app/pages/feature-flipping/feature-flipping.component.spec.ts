import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlippingComponent } from './feature-flipping.component';

describe('FeatureFlippingComponent', () => {
  let component: FeatureFlippingComponent;
  let fixture: ComponentFixture<FeatureFlippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlippingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureFlippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
