import { Component, inject } from '@angular/core';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [NavMobileComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  private navService = inject(NavService)
  
  changeNav(){
    this.navService.updateNav(true);
  }
}
