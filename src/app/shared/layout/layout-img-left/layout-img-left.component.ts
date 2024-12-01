import { Component } from '@angular/core';
import { ButtonLgComponent } from "../../buttons/button-lg/button-lg.component";
import { ButtonLgIconComponent } from "../../buttons/button-lg-icon/button-lg-icon.component";

@Component({
  selector: 'app-layout-img-left',
  standalone: true,
  imports: [ButtonLgComponent, ButtonLgIconComponent],
  templateUrl: './layout-img-left.component.html',
  styleUrl: './layout-img-left.component.scss'
})
export class LayoutImgLeftComponent {
  iconPlane='assets/img/icon-plane.svg';
  buttonText: string = "Viajar";
}
