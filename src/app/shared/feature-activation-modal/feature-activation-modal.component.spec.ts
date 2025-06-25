import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureActivationModalComponent } from './feature-activation-modal.component';

describe('FeatureActivationModalComponent', () => {
  let component: FeatureActivationModalComponent;
  let fixture: ComponentFixture<FeatureActivationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureActivationModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureActivationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
