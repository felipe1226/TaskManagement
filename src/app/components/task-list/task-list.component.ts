import { UserService } from 'src/app/services/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WorkTaskDTO } from 'src/app/interfaces/work-task/WorkTaskDTO';
import { WorkTaskFiltersDTO } from 'src/app/interfaces/work-task/WorkTaskFiltersDTO';
import { WorkTaskSaveDTO } from 'src/app/interfaces/work-task/WorkTaskSaveDTO';
import { WorkTaskService } from 'src/app/services/work-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  @Output() addAction = new EventEmitter();
  @Output() selectWorkTask = new EventEmitter();

  workTasks: Array<WorkTaskDTO> =[]

  constructor(
    private userService: UserService,
    private workTaskService: WorkTaskService
  ){}


    ngOnInit(): void {
      this._callServices();
    }

  private _callServices(){
    this._getWorkTasks();
  }

  private _getWorkTasks(){
     const filters: WorkTaskFiltersDTO ={
      userId: this.userService.getUserId()
     }
    this.workTaskService.getWorkTasks(filters).subscribe(response => {
      if(response.success){
        this.workTasks = response.data
      }
    });
  }

  selectTask(id: any){
    this.selectWorkTask.emit({ id: id });
  }

  completeTask(workTaskId: string){

    let data: WorkTaskSaveDTO = {
      Id: workTaskId,
      StatusCode: 'COMPLETE',
      Observation: 'La tarea se finaliza exitosamente!'
    }

    this._updateStatus(data);
  }

  private _updateStatus(data: WorkTaskSaveDTO){
    this.workTaskService.updateStatus(data).subscribe(response => {
      if(response.success){
        console.log(response.message)
      }
    })
  }

  addTaskAction(){
    this.addAction.emit({ value: true})
  }
}
