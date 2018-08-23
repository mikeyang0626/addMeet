import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMeetingsComponent } from './my-meetings.component';

describe('MyMeetingsComponent', () => {
  let component: MyMeetingsComponent;
  let fixture: ComponentFixture<MyMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
