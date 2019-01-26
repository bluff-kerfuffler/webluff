import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestaccessComponent } from './requestaccess.component';

describe('RequestaccessComponent', () => {
  let component: RequestaccessComponent;
  let fixture: ComponentFixture<RequestaccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestaccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
