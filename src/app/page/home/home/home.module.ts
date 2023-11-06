import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AddTaskComponent } from 'src/app/components/add-task/add-task.component';
import { TaskListComponent } from 'src/app/components/task-list/task-list.component';
import { TaskDataComponent } from 'src/app/components/task-data/task-data.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkTaskDataComponent } from 'src/app/components/work-task-data/work-task-data.component';




@NgModule({
  declarations: [
    HomeComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskDataComponent,
    WorkTaskDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    NgbNavModule
  ]
})
export class HomeModule { }
