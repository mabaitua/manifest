import { Component } from '@angular/core';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [NavMobileComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {

}
