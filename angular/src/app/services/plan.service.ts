import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../models/plan';
import { IncompletionService } from '../models/incompletionService';

@Injectable({
  providedIn: 'root'
})
export class PlanService implements IncompletionService {

  constructor(
    private http: HttpClient
  ) { }

  get(_id: string): Observable<Plan> { return this.getPlan(_id) }
  remove(_id: string): Observable<any> { return this.removePlan(_id) }

  getPlans(): Observable<Plan[]> {
    return this.http.get<Plan[]>('/api/plans').pipe();
  }

  getPlan(_id: string): Observable<Plan> {
    return this.http.get<Plan>(`/api/plans/${_id}`).pipe();
  }

  addPlan(plan: Plan): Observable<Plan> {
    return this.http.post<Plan>('/api/plans', plan).pipe();
  }

  modifyPlan(plan: Plan): Observable<Plan> {
    return this.http.put<Plan>(`/api/plans/${plan._id}`, plan).pipe();
  }

  removePlan(_id: string): Observable<any> {
    return this.http.delete(`/api/plans/${_id}`).pipe();
  }

  count(): Observable<number> {
    return this.http.get<number>(`/api/plans/count`).pipe();
  }

}
