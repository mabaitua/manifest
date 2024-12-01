import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SeparatorComponent } from '../separator/separator.component';
import { ButtonLgIconComponent } from '../buttons/button-lg-icon/button-lg-icon.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonLgIconComponent, SeparatorComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
