import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DialogBoxService } from './dialog-box.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  providers: [DialogBoxService]
})
export class DialogBoxComponent implements OnInit {
  articles:any;
  constructor(private dialogBoxService:DialogBoxService) { }

  ngOnInit() {
    this.dialogBoxService.get().subscribe((data:any)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}
