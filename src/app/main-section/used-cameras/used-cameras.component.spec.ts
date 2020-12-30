import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedCamerasComponent } from './used-cameras.component';

describe('UsedCamerasComponent', () => {
  let component: UsedCamerasComponent;
  let fixture: ComponentFixture<UsedCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
