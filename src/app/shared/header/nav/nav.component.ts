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
  
  changeNav(){
    this.navService.updateNav(false);
  }
}
