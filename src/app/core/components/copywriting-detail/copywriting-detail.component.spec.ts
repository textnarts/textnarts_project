import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopywritingDetailComponent } from './copywriting-detail.component';

describe('CopywritingDetailComponent', () => {
  let component: CopywritingDetailComponent;
  let fixture: ComponentFixture<CopywritingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopywritingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopywritingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
