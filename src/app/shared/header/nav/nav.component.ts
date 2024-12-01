import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NavService } from '../../../services/nav.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  private navService = inject(NavService)
  
  showMobileMenu = false;
  changeNav(){
    this.showMobileMenu = !this.showMobileMenu;
    this.navService.updateNav(this.showMobileMenu);
  }
}
