import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import {QuotesComponent} from '../quotes/quotes.component'

@Component({
  selector: 'app-get-quotes',
  templateUrl: './get-quotes.component.html',
  styleUrls: ['./get-quotes.component.css']
})
export class GetQuotesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
