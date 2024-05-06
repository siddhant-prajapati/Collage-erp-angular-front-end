import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { devEnvironment } from '../../environment/dev-environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http : HttpClient) { }

  department:string="";
  operation : string = '';

  role: string = "";
  loginDepartment : string = ""
  
  /**
   * this method is use to find by userId
   * @param id : id from input element or sessionStorage
   * @returns 
   */
  async findImageByUserId(id : any){
    try {
      const responce = await axios.get(devEnvironment.backEndUrl+"/image/fileById/"+id);
      if(responce){
        console.log(responce.data)
        return responce.data;
      }
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * get all user based on role and department
   * @param role : role of the user
   * @param department : name of department
   * @returns 
   */
  async findUserByDepartment(role : string,department: String){
    try {
      const responce = await axios.get(
          devEnvironment.backEndUrl + "/" + role + "/get-by-department/" + department
        )
        if(responce){
          //console.log(responce.data)
          return responce.data
        }
    } catch (e) {
      console.log(e)
    }
  }


  

  /**
   * Use to upload profile image
   * @param role : role of user
   * @param userId : userId of user
   * @param image : multipart image data
   * @returns 
   */
  uploadImage(role : string, userId : number, image : any){
    const token = sessionStorage.getItem("token");
    //return this.http.post(devEnvironment.backEndUrl + "/image/fileSystem/" + role + "/" + userId, image);
    return axios.post(devEnvironment.backEndUrl + "/image/fileSystem/" + role + "/" + userId, image, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    });
  }

  showImageById(){
    const userId = sessionStorage.getItem("userId")
    const token = sessionStorage.getItem("token");
    return axios.get(devEnvironment.backEndUrl + "/image/fileById/"+userId, {
      headers : {
        'Authorization' : `Bearer ${token}`
      }
    })
  }

  

  
}
