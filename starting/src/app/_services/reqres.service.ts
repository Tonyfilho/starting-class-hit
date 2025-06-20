import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IReqRes } from '../_shared/interfaces/reqres';
//import { IReqres } from '../_share/interfaces/reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {
   private readonly reqresURL = "https://reqres.in/api/users?page";
   private readonly reqresKEY = environment.reqresApiKey;
  constructor(private http: HttpClient) {

   }

  getDataReqresByGetString = () => {
    return this.http.get<any>(`https://reqres.in/api/users?page=2&api_key=${this.reqresKEY}`);
  };
  getDataReqresByGet = () => {
    return this.http.get<IReqRes>(this.reqresURL+'=2&'+'api_key='+this.reqresKEY);
  };


  getDataReqresByPost = (page: number) => {
    const headers = new HttpHeaders().set("x-api-key", this.reqresKEY);
    const localUrlPage = this.reqresURL + `=${page}`;
    return this.http.get<any>(localUrlPage, {headers});
  };




}
