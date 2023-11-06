import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTaskDataComponent } from './work-task-data.component';

describe('WorkTaskDataComponent', () => {
  let component: WorkTaskDataComponent;
  let fixture: ComponentFixture<WorkTaskDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTaskDataComponent]
    });
    fixture = TestBed.createComponent(WorkTaskDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
