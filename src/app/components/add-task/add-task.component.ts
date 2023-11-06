import { WaypointSaveDTO } from './../../interfaces/work-task/WorkTaskSaveDTO';
import { WorkTaskService } from 'src/app/services/work-task.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkTaskSaveDTO } from 'src/app/interfaces/work-task/WorkTaskSaveDTO';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() backAction = new EventEmitter;

  form!: FormGroup;

  
  categories: Array<any> = [];
  locations: Array<any> = [];
  waypoints: Array<WaypointSaveDTO> = [];

  selectedCategory!: string;
  selectedLocation!: string;

  minDate = { year: 1940, month: 1, day: 1 };
  maxDate = {year: new Date().getFullYear(),month: new Date().getMonth(), day: new Date().getDate()}
  startDate = new Date();

  constructor(
    private categoryService: CategoryService,
    private locationService: LocationService,
    private userService: UserService,
    private workTaskService: WorkTaskService,
    private formBuilder: FormBuilder,
  ){
    this._initForm();
  }

  get formControls (){
    return this.form.controls;
  }

  private _initForm(){
    this.form = this.formBuilder.group(
      {
        category: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.minLength(250)]],
        observation: ['', [Validators.minLength(250)]],
        deadline: ['', [Validators.required]],
        location: ['', [Validators.required]],
        address: ['', [Validators.required]]
      }
    )
  }


  ngOnInit(): void {
    this._callServices();
  }

  private _callServices(){
    this._getCategories();
    this.getLocations();
  }

  private _getCategories(){
    this.categoryService.getCategories().subscribe(response => {
      if(response.success){
        this.categories = response.data
      }
    });
  }

  private getLocations(){
    this.locationService.getLocations().subscribe(response => {
      if(response.success){
        this.locations = response.data
      }
    });
  }

  addWaypoint(){
    debugger
    if(this.selectedLocation == undefined || this._getFormValue('address').trim() == '')
      return;

    let order = this.waypoints.length + 1;
    let locationName = this.locations.find(item => item.id == this.selectedLocation).name

    this.waypoints.push(
    {
      locationId: this.selectedLocation,
      locationName: locationName,
      address: this._getFormValue('address'),
      order: order
    })
  }

  save(event: any){
    debugger
    event.preventDefault();

    const workTaskData: WorkTaskSaveDTO = {
      UserId: this.userService.getUserId(),
      CategoryId: this.selectedCategory,
      Description: this._getFormValue('description'),
      Observation: this._getFormValue('observation'),
      DeadLine: this._getFormValue('deadline'),
      StatusCode: 'STORE',
      WaypointsDTO: this.waypoints
    }

    this._saveData(workTaskData);
  }

  private _getFormValue(controlName: string){
    return String(this.form.get(controlName)?.value).trim();
  }

  private _saveData(workTaskData: WorkTaskSaveDTO){
    this.workTaskService.saveWorkTask(workTaskData).subscribe(response => {
      if(response.success){
        console.log(response.message);
      }
    })
  }


  back(){
    this.backAction.emit({ value: true})
  }

}
