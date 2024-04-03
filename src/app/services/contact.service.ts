import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { devEnvironment } from '../../environment/dev-environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http : HttpClient) { }

  async sendMessage(message : object){
    try{
      console.log(message)
      const responce = await axios.post(devEnvironment.contactUrl+"sendMail", message);
      if(responce){
        console.log(responce.data)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
