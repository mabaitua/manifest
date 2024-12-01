import { Component, inject } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.scss'
})
export class NavMobileComponent {
  private navService = inject(NavService)
  
  changeNav(){
    this.navService.updateNav(true);
  }
}
