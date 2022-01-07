import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  @Input() quotes:any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
