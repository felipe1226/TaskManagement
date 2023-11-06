import { Component, Input, OnInit } from '@angular/core';
import { WorkTaskDTO } from 'src/app/interfaces/work-task/WorkTaskDTO';
import { WorkTaskSaveDTO } from 'src/app/interfaces/work-task/WorkTaskSaveDTO';
import { WorkTaskService } from 'src/app/services/work-task.service';

@Component({
  selector: 'app-task-data',
  templateUrl: './task-data.component.html',
  styleUrls: ['./task-data.component.css']
})
export class TaskDataComponent implements OnInit{

  @Input() data!: WorkTaskDTO;

  showTaskList: boolean = true;
  
  constructor(
    private workTaskService: WorkTaskService
  ){}

  ngOnInit(): void {
  }

  changeStatus(status: string, waypointId: string){
    if(status == 'CHECK'){
      let index = Number(this.data.waypoints.find(item => item.id == waypointId)?.order)
      status = (index != this.data?.waypoints?.length) ? 'ON_WAY' : 'RET_STOR';
    }

    let data: WorkTaskSaveDTO = {
      Id: this.data.id,
      StatusCode: status,
      StatusObservation: ''
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

}
