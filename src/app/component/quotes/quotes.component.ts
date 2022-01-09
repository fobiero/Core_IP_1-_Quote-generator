import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  date = new Date();
  
  @Input() quotes:any;

  constructor() { }

  ngOnInit(): void {

  }
}
