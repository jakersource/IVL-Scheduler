import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedResponse } from '../models/paginated-response';
import { Scheduler } from '../models/scheduler';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http: HttpClient) {}

  protected headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getClasses(): Observable<PaginatedResponse<Scheduler[]>> {
    this.http.get<PaginatedResponse<Scheduler[]>>(environment.apiUrl);
    return this.http.get<PaginatedResponse<Scheduler[]>>(environment.apiUrl);
  }
}
