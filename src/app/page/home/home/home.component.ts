import { UserService } from './../../../services/user.service';
import { WorkTaskService } from 'src/app/services/work-task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  showAddTaskSection: boolean = false;
  showListSection: boolean = true;
  showDataSection: boolean = true;
  workTaskData: any;
  userName!: string

  constructor(
    private userService: UserService,
    private workTaskService: WorkTaskService
  ){}

  ngOnInit(): void {
    this._callServices();
  }

  private _callServices(){
    this._getUserData();
  }

  private _getUserData(){
    this.userService.getUserData().subscribe(response => {
      if(response.success){
        this.userName = response.data.name
        this.userService.setUserId(response.data.id)
      }
    })
  }

  private _getWorkTaskData(id: string){
    this.workTaskService.getWorkTask(id).subscribe(response => {
      if(response.success){
        this.workTaskData = response.data;
      }
    })
  }

  showData(workTask: any){
    this.showDataSection = true;
    this._getWorkTaskData(workTask.id);
  }

  addTaskAction(event: any){
    this.showAddTaskSection = true;
    this.showListSection = false;
    this.showDataSection = false;
  }

  backAddTaskAction(event: any){
    this.showAddTaskSection = false;
    this.showListSection = true;
    this.showDataSection = true;
  }

  backDataAction(){
    this.showDataSection = false;
  }
}
