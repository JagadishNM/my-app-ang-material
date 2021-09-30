import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { 
    of(1,2,3,4).pipe(
      mapTo("request")
    ).subscribe(console.log)
  }

  getFakeData():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      }),
      observe: "response" as 'body'
  };
   return this.http.get<any>('https://jsonplaceholder.typicode.com/todos',httpOptions)
    .pipe(
      map((res:any) => 
      res.body.filter( (app:any) => app.completed === true).map( (data:any) =>{
          return {
            id: data.id,
            completed: data.completed
          }
      })
      ),
      catchError(this.handleError('error', [],))
  );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T | undefined> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
        // Let the app keep running by returning an empty result.
        return of(result);
    };
  }
}
