import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { devEnvironment } from '../../environment/dev-environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http : HttpClient) { }

  //creating new Request
  async createData(ele : object){
    try {
      const responce = await axios.post(devEnvironment.backEndUrl, ele);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async updateData(id : number,ele : object){
    try {
      const responce = await axios.put(devEnvironment.backEndUrl+id, ele);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findDataById(id : number){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl+id);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async findAllData(){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl + "/staff/all");
      if(responce){
        console.log(responce.data)
        return responce.data
      }
    } catch (error) {
      console.log(error)
    }
  }

  async deleteDataById(id : number){
    try {
      const responce = await axios.delete(devEnvironment.backEndUrl+id);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
