import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureFlippingHomeComponent } from './feature-flipping-home.component';

describe('FeatureFlippingHomeComponent', () => {
  let component: FeatureFlippingHomeComponent;
  let fixture: ComponentFixture<FeatureFlippingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureFlippingHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureFlippingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
