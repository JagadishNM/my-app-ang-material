import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, interval, of, Subject, Subscription, timer } from 'rxjs';
import { concatMap, debounceTime, delay, distinctUntilChanged, map, mergeAll, mergeMap, shareReplay, switchMap, takeUntil, takeWhile, tap } from 'rxjs/operators';
import { InteractionSerivceService } from '../interaction-serivce.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {


  searchEngine: FormControl = new FormControl();
  counter:number = 0;

  receivedData:any[] [] =[];
  private sub: Subscription | undefined;

  private _loggedIn:boolean = false;
  message:string = '';
  @Input() public fromparent:string = '';
  @Output() public childInfo = new EventEmitter();

  get loggedIn(): boolean {
    return this._loggedIn;
  }

@Input()
  set loggedIn(value:boolean){
    this._loggedIn = value;
    if(value == true){
      this.message = 'logged in';
    }else{
      this.message = 'logged out';
    }
  }

  //to unsubscibe
  notifier = new Subject();


  constructor(private _interactionSerivceService: InteractionSerivceService,
    private cdr:ChangeDetectorRef, private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges){
    // for(const propName in changes){
    //   const chng = changes[propName];
    //   const cur = JSON.stringify(chng.currentValue);
    //   const prev = JSON.stringify(chng.previousValue);
    //   console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`)
    // }
  }

  

  ngOnInit() {
    //Interval
    //takeUntill and takeWhile
  //   const obs$ = interval(1000);
  //  obs$.pipe(takeUntil(this.notifier)).subscribe(x => console.log(x))
    // obs$.pipe(takeWhile(value => value < 10),takeUntil(this.notifier)).subscribe(x => {
    //   console.log(x)})

    //timer
    // const obs$ = timer(5000,1000);
    // obs$.pipe(takeUntil(this.notifier)).subscribe(x => console.log(x));

    //shareReply is used to call API at once if you sbubscrie api obs multiple times
    // const obs$ = this.http.get(
    //   'https://jsonplaceholder.typicode.com/todos/1'
    //   ).pipe(
    //     shareReplay()
    //   )

    //   obs$.subscribe(
    //     data => console.log(data)
    //   )

    //   obs$.subscribe(
    //     data => console.log(data)
    //   )

    //Map mergeMap concetMap=>sequence output like one by one
    const obs = ['Apple','Bat','cat'];
    const obs$ = from(obs);
    obs$.pipe(
      mergeMap((x) => this.changeDataUsingMap(x))
    ).subscribe(data => {
      console.log(data);
      })

    //sharing data using subject and observable and unsubscribe
    this.sub = this._interactionSerivceService.$teacherMeaage.subscribe(
      (message:any) =>{
        this.receivedData.push(message);
        this.cdr.markForCheck();
      }
    );

    // this.sub = this._interactionSerivceService.$sendNumbers.subscribe(
    //   data =>{
    //     this.receivedData.push(data);
    //   }
    // );

    //switch map
    this.sub = this.searchEngine.valueChanges.pipe(
      debounceTime(1000),
      switchMap(val => interval(500))
    ).subscribe( data => {
      this.counter = data;
     // console.log(this.counter)
      this.cdr.markForCheck();
    }
      
      )
  }

  ngOnDestroy(){
    this.sub?.unsubscribe();
    this.notifier.next();
    this.notifier.complete();
  }

  fireEvent(){
    this.childInfo.emit('Child to Parent !');
  }

  changeDataUsingMap(data:any){
    return of(data + '   changed').pipe(delay(1000));
  }

  //tap
  tapOp(){
    of(1,2,3,4,5,6).pipe(
      tap(val => console.log(`tap ${val + 1}`))
    ).subscribe( data => console.log(data))
  }

}
