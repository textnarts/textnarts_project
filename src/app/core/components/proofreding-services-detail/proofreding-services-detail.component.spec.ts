import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofredingServicesDetailComponent } from './proofreding-services-detail.component';

describe('ProofredingServicesDetailComponent', () => {
  let component: ProofredingServicesDetailComponent;
  let fixture: ComponentFixture<ProofredingServicesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProofredingServicesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofredingServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
