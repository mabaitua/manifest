import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ButtonLgComponent } from "../buttons/button-lg/button-lg.component";
import { SeparatorComponent } from '../separator/separator.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, ButtonLgComponent, SeparatorComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
