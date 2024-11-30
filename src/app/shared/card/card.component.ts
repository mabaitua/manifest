import { Component, Input } from '@angular/core';
import { ButtonMdComponent } from "../buttons/button-md/button-md.component";
import { ChipSComponent } from "../chips/chip-s/chip-s.component";
import { ChipIconComponent } from "../chips/chip-icon/chip-icon.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonMdComponent, ChipSComponent, ChipIconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imgUrl: string="";
}
