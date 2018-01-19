import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaserCanonComponent } from './laser-canon.component';

describe('LaserCanonComponent', () => {
  let component: LaserCanonComponent;
  let fixture: ComponentFixture<LaserCanonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaserCanonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaserCanonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
