import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-custom-elements',
  templateUrl: './custom-elements.component.html',
  styleUrls: ['./custom-elements.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  animations: [
    trigger('state', [
      state('opened', style({transform: 'translateY(0%)'})),
      state('void, closed', style({transform: 'translateY(100%)', opacity: 0})),
      transition('* => *', animate('100ms ease-in')),
    ])
  ],
  styles: [`
    :host {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #009cff;
      height: 48px;
      padding: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid black;
      font-size: 24px;
    }

    button {
      border-radius: 50%;
    }
  `]
})
export class CustomElementsComponent {

  @HostBinding('@state')
  state: 'opened' | 'closed' = 'closed';

  @Input()

  get message():string{ return this._message };
  set message(message:string){
    this._message = message;
    this.state = 'opened';
  }

  private _message = '';

  @Output()
  closed = new EventEmitter<void>();
  
  constructor(private cd:ChangeDetectorRef) {
    
   }

  ngOnInit() {
  }

}
