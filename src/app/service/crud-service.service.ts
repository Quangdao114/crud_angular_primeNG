import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserInfo } from '../interface/person.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http : HttpClient) { }

  getData(): Observable<IUserInfo[]>{
    return this.http.get<IUserInfo[]>(`https://server-deployment-yvii.onrender.com/todo`)
  }

 public addData(user : IUserInfo): Observable<IUserInfo>{
    return this.http.post<IUserInfo>(`https://server-deployment-yvii.onrender.com/todo`, user);
  }

  public deleteData(id: number): Observable<IUserInfo>{
    return this.http.delete<IUserInfo>(`https://server-deployment-yvii.onrender.com/todo/${id}`);
  }

  public updateData(user : IUserInfo): Observable<IUserInfo>{
    return this.http.post<IUserInfo>(`https://server-deployment-yvii.onrender.com/todo`, user);
  }
}
