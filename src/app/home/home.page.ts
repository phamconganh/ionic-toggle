import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  var1 = true;
  var2 = true;
  var3 = true;
  var4 = true;

  constructor(){}

  change(event){
    if (this.var1 == false && this.var2 == false 
      && this.var3 == false && this.var4 == false){
      // I want to have at least one toggle is checked
      // It mean toggle 1,2,3 off and toggle 4 can not off
      // in ionic 3 and just: event.check = true;
      // But in ionic 4, the handle of checked is off
      // And I use:
      this.var1 = true;
      this.var2 = true;
      this.var3 = true;
      this.var4 = true;
      // When turn of toggle 1,2,3 then turn off toggle 4 anf toggle 1,2,3 turn on'
      // But after that, turn off toggle 3,2,1, there are not any toggle turn on
    }
  }
}
