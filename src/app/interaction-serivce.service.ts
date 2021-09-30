import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionSerivceService {

  private _teacherInteraction = new Subject<string>();
  $teacherMeaage = this._teacherInteraction.asObservable();

  private _arrNumbars = new Subject<number[]>();
  $sendNumbers = this._arrNumbars.asObservable();

  constructor() {
    // interval(200).subscribe( () =>{
    //   const arr = [];
    //   for(let i = 0; i < 100000; i++){
    //     arr.push(Math.random());
    //   }
    //   this._arrNumbars.next(arr);
    // })
   }

  sendMessage(message:string){
    this._teacherInteraction.next(message);
  }

}
