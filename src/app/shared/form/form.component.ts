import { Component } from '@angular/core';
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { ButtonLgIconComponent } from "../buttons/button-lg-icon/button-lg-icon.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [InputComponent, TextareaComponent, ButtonLgIconComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  iconSend='assets/img/icon-send.svg';
  buttonText: string = "Enviar";
}
