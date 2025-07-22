import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserApi } from '../_shared/interfaces/iuser';


/**Exemplo didatico de um Type , nos proximo usaremos interfaces */


@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUserApi[]> {
    return this.http.get<IUserApi[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<IUserApi> {
    return this.http.get<IUserApi>(`${this.apiUrl}/${id}`);
  }

  createUser(user: IUserApi): Observable<IUserApi> {
    return this.http.post<IUserApi>(this.apiUrl, user);
  }

  updateUser(id: number, user: IUserApi): Observable<IUserApi> {
    return this.http.put<IUserApi>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
