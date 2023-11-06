import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WorkTaskFiltersDTO } from '../interfaces/work-task/WorkTaskFiltersDTO';
import { WorkTaskSaveDTO } from '../interfaces/work-task/WorkTaskSaveDTO';

@Injectable({
  providedIn: 'root'
})
export class WorkTaskService {

  constructor(private http: HttpClient) { }

  saveWorkTask(workTaskData: WorkTaskSaveDTO): Observable<any> {
    return this.http.post<any>(`${environment.api}/task/save`, workTaskData)
  }

  getWorkTask(id: string): Observable<any> {
    const params = new HttpParams({ fromObject: {id} })
    return this.http.get<any>(`${environment.api}/task/get`, {params})
  }

  getWorkTasks(filters: WorkTaskFiltersDTO): Observable<any> {
    return this.http.post<any>(`${environment.api}/task/list`, filters)
  }

  updateStatus(data: WorkTaskSaveDTO): Observable<any> {
    return this.http.post<any>(`${environment.api}/task/update-status`, data)
  }
}
