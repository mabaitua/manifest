import { Component } from '@angular/core';
import { LinkComponent } from "../link/link.component";
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LinkComponent, SeparatorComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
