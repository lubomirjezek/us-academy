import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTrainingComponent } from './selected-training.component';

describe('SelectedTrainingComponent', () => {
  let component: SelectedTrainingComponent;
  let fixture: ComponentFixture<SelectedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
