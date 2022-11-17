import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscreationDetailComponent } from './transcreation-detail.component';

describe('TranscreationDetailComponent', () => {
  let component: TranscreationDetailComponent;
  let fixture: ComponentFixture<TranscreationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscreationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscreationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
