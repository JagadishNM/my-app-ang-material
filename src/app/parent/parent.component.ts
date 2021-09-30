import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { InteractionSerivceService } from '../interaction-serivce.service';
import { ParentService } from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [ParentService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  showChild:boolean = false;
  changeDetect:string = '';
  public dataFromParent:string = '';
  msg:any;
  public userLoggedIn:boolean = false;
  constructor(
    private _interactionSerivceService: InteractionSerivceService,
    private _parentService: ParentService,
    private cdr:ChangeDetectorRef) { 
  }

  ngOnInit() {
    
    setTimeout(() =>{
      this.changeDetect = 'change detected';
      //this.cdr.markForCheck();
    },2000)
  }

  onKey(event: any) { // without type info
    this.dataFromParent = event.target.value;
  }

  userLoggedInButton(value:boolean){
    this.userLoggedIn = value;
  }

  teacherWish( msg:string){
    this._interactionSerivceService.sendMessage(msg);
  }

  toogleChild(){
    this.showChild = !this.showChild;
  }

  getDummyData(){
    this._parentService.getFakeData().subscribe( 
      data =>{
        console.log(data);
    })
  }

}
