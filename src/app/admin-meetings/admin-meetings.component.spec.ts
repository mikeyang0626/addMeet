
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingsComponent } from './admin-meetings.component';

describe('AdminMeetingsComponent', () => {
  let component: AdminMeetingsComponent;
  let fixture: ComponentFixture<AdminMeetingsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
