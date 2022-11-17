import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLocalizationDetailComponent } from './app-localization-detail.component';

describe('AppLocalizationDetailComponent', () => {
  let component: AppLocalizationDetailComponent;
  let fixture: ComponentFixture<AppLocalizationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLocalizationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLocalizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
