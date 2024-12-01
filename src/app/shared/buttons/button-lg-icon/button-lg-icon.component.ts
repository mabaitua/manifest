import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-button-lg-icon',
  standalone: true,
  imports: [],
  templateUrl: './button-lg-icon.component.html',
  styleUrl: './button-lg-icon.component.scss'
})
export class ButtonLgIconComponent {
  @Input() cssClassName: string="";
  @Input() imgUrl: string="";
  @Input() buttonText: string="";
  @Input() showIcon = true;

  

}
