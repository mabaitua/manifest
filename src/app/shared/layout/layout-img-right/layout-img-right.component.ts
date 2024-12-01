import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../buttons/button-lg/button-lg.component";
import { ButtonLgIconComponent } from "../../buttons/button-lg-icon/button-lg-icon.component";

@Component({
  selector: 'app-layout-img-right',
  standalone: true,
  imports: [ButtonLgComponent, ButtonLgIconComponent],
  templateUrl: './layout-img-right.component.html',
  styleUrl: './layout-img-right.component.scss'
})
export class LayoutImgRightComponent {
  iconBeach='assets/img/icon-beach.svg';
  buttonTextVermas: string = "Ver más";
}
