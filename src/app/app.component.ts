import { ChangeDetectionStrategy, Injector } from '@angular/core';
import { Component } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './custom-elements/custom-element.service';
import { CustomElementsComponent } from './custom-elements/custom-elements.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class AppComponent {
  title = 'my-app-ang-material';

  oblp = '';
  asnk:any;

  constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(CustomElementsComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit () {
    this.objLPMethod();
    this.asnkMethod();

    //get browser language
    let userLang = navigator.language
    console.log(userLang)

    //timestamp
  }

  duplicateArray(){
    var arr = [1,2,3,'some',1,5,4,4,3,3,3];

//     var count = data => 
//         data.reduce((a,b) =>({ ...a,
//             [b] : (a[b] || 0) + 1
//     }),{})

// console.log(count(arr))
  }

  objLPMethod(){
    let user  = {
      name: 'Jagadish',
      age: undefined,
      maild: 'some@gmail.com'
    };
    Object.values(user).forEach(element =>{
      if(element != undefined)
      this.oblp += element + "  ";
    })
  }

 asnkMethod(){
  let hello = async () => {
    return 'hello';
  }

  hello().then((value) => this.asnk = value);

  }

}
