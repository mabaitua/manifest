import { Component } from '@angular/core';
import { ButtonMdComponent } from "../buttons/button-md/button-md.component";
import { ChipSComponent } from "../chips/chip-s/chip-s.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonMdComponent, ChipSComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
