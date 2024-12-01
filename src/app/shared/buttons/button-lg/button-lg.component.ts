import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-lg',
  standalone: true,
  imports: [],
  templateUrl: './button-lg.component.html',
  styleUrl: './button-lg.component.scss'
})
export class ButtonLgComponent {
  @Input() cssClassName: string="";
}
