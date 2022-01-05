import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // cutom button 
  newQuote(){
    console.log('Added new Quote to the List');
  }
}
