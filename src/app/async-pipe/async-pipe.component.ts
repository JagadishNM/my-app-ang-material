import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';
@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {

  promise: Promise<any>;
  observable$: Observable<number>;
  observableData: number = 0;
  constructor() {
    this.promise = this.getPromise();
    this.observable$ = this.getObservable();
    this.subScribeObservable();
   }

  ngOnInit() {
    
  }

  getPromise(){
    return new Promise((resolve,reject) =>{
      setTimeout(() =>{
        resolve('Promise is Complete');
      },3000)
    })
    
  }

  getObservable(){
    return interval(1000).pipe(take(5),map(value => value+1));
  }

  subScribeObservable(){
    this.observable$.subscribe( data => {
      this.observableData = data;
    })
  }

}
