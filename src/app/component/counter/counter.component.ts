import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;
  counter(type:string) {
  //  type === 'upVoke' ? this.count ++ : this.count --;
  
  if(type == 'upVoke') {
    this.count ++;
  } else {
    this.count --;
  }
  }
}
