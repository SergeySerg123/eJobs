import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() w: number;
  @Input() h: number;

  constructor() {

  }

  ngOnInit() {
    console.log(this.w, this.h);
  }

}
