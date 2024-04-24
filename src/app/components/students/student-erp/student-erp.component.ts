import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AddStudentComponent } from '../add-student/add-student.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentApiService } from '../../../services/student-api.service';

@Component({
  selector: 'app-student-erp',
  standalone: true,
  imports: [
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    AddStudentComponent, 
    CommonModule,
    JsonPipe,
    StudentDetailsComponent
  ],
  templateUrl: './student-erp.component.html',
  styleUrl: './student-erp.component.css'
})
export class StudentErpComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Previous value is')
    console.log(changes['student'].previousValue)
    console.log('current value');
    console.log(changes['student'].currentValue);
    
    // if(changes['student'].previousValue && changes['student'].currentValue){
    //   console.log(this.student)
    // }
  }

  httpService = inject(StudentApiService)

  showElement:boolean = false

  toggleForm(){
    this.showElement= !this.showElement
    this.httpService.operation = 'add'
    console.log(this.httpService.operation);
    
  }

  async findStudent(id : any){
    const data = await this.httpService.findStudentById(id).toPromise()
    this.httpService.student = data
    console.log(this.httpService.student)
  }
}
