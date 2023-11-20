import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelocateEmployeePopupComponent } from './relocate-employee-popup.component';

describe('RelocateEmployeePopupComponent', () => {
  let component: RelocateEmployeePopupComponent;
  let fixture: ComponentFixture<RelocateEmployeePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelocateEmployeePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelocateEmployeePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
