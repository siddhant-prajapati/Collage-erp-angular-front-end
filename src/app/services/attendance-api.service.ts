import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';
}
