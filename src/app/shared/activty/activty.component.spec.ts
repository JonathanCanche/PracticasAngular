import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivtyComponent } from './activty.component';

describe('ActivtyComponent', () => {
  let component: ActivtyComponent;
  let fixture: ComponentFixture<ActivtyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivtyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivtyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
