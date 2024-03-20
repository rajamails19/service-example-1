import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postData(data: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', data);
  }

  putData(data: any): Observable<any> {
    return this.http.put('https://jsonplaceholder.typicode.com/posts/1', data);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  
}
