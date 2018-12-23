import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyboxComponent } from './greybox.component';

describe('GreyboxComponent', () => {
  let component: GreyboxComponent;
  let fixture: ComponentFixture<GreyboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreyboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreyboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
