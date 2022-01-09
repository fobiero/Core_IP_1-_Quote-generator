import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  addQuote(forms:NgForm) {
    if(this.authorName === ''|| this.postByName === '' || this.quoteName === '') {
      alert('Fields empy')
    } else {
      this.Quotes.push({name:this.authorName,post:this.postByName,quote:this.quoteName});
      forms.reset();
    }
  }

}
