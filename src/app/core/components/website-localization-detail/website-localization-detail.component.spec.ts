import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLocalizationDetailComponent } from './website-localization-detail.component';

describe('WebsiteLocalizationDetailComponent', () => {
  let component: WebsiteLocalizationDetailComponent;
  let fixture: ComponentFixture<WebsiteLocalizationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteLocalizationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLocalizationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
