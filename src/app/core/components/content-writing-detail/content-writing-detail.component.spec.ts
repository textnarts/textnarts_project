import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWritingDetailComponent } from './content-writing-detail.component';

describe('ContentWritingDetailComponent', () => {
  let component: ContentWritingDetailComponent;
  let fixture: ComponentFixture<ContentWritingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWritingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentWritingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
