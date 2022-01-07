import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string  = 'Quote Generator'

  constructor() { }

  ngOnInit(): void {
  }
  toggleAddQuote() {
    console.log('Quote addedd successfuly');
  }
}
