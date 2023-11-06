import { Component, Input } from '@angular/core';
import { WorkTaskDTO } from 'src/app/interfaces/work-task/WorkTaskDTO';
import { WorkTaskSaveDTO } from 'src/app/interfaces/work-task/WorkTaskSaveDTO';
import { WorkTaskService } from 'src/app/services/work-task.service';

@Component({
  selector: 'app-work-task-data',
  templateUrl: './work-task-data.component.html',
  styleUrls: ['./work-task-data.component.css']
})
export class WorkTaskDataComponent {

  @Input() data!: WorkTaskDTO;
  @Input() showFullData?: boolean;

  constructor(
    private workTaskService: WorkTaskService
  ){}

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
}
