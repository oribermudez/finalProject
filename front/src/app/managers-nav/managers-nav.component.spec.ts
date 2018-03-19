import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersNavComponent } from './managers-nav.component';

describe('ManagersNavComponent', () => {
  let component: ManagersNavComponent;
  let fixture: ComponentFixture<ManagersNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
