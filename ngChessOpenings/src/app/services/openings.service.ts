import { Opening } from './../models/opening';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpeningsService {
  private opening = [];
  private url = environment.baseUrl + 'api/openings';

  constructor(private http: HttpClient) {}

  index() {
    return this.http.get<Opening[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  create(newTodo: Opening): Observable<Opening> {
    return this.http.post<Opening>(this.url, newTodo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }

  destroy(id: number) {
    // for(let i = 0; i < this.todos.length; i++) {
    //   if(this.todos[i].id === id) {
    //     this.todos.splice(i, 1);
    //   }
    // }
    return this.http.delete<boolean>(this.url + '/' + id).pipe(
      catchError((err: any, err2: any) => {
        console.log(err);
        console.log(err2);
        return throwError('KABOOM');
      })

    );
  }

  update(updateTodo: Opening) {

    return this.http.put<Opening>(this.url + '/' + updateTodo.openingId, updateTodo).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
}
