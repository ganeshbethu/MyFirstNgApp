import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  settitle:any;
  getInputValue(){
    console.log(this.title);
    this.settitle=this.title;
    this.title='';

  }
}
