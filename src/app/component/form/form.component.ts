import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  authorName: any = "";
  postByName:any = "";
  quoteName: any = "";
  Quotes: any = [];

  addQuote() {
    this.Quotes.push({name:this.authorName,post:this.postByName,quote:this.quoteName});
  }

}
