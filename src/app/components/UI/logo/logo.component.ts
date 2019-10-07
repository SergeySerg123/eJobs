import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  @Input() w: number = 48;
  @Input() h: number = 48;
  @Input() textW: number = 76;
  @Input() textH: number = 35;

  constructor() {

  }

}
