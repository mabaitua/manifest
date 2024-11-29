import { Component } from '@angular/core';
import { ButtonMdComponent } from "../buttons/button-md/button-md.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonMdComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
