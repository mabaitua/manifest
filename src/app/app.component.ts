import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./shared/card/card.component";
import { LayoutImgLeftComponent } from "./shared/layout/layout-img-left/layout-img-left.component";
import { LayoutImgRightComponent } from "./shared/layout/layout-img-right/layout-img-right.component";
import { HeroComponent } from "./shared/hero/hero.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TableComponent } from "./shared/table/table.component";
import { FormComponent } from "./shared/form/form.component";
import { NavService } from './services/nav.service';
import { HeaderMobileComponent } from './shared/header-mobile/header-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, LayoutImgLeftComponent, 
    LayoutImgRightComponent, HeroComponent, FooterComponent, 
    TableComponent, FormComponent, HeaderMobileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Menú
  private navService = inject(NavService)
  showMobileMenu: boolean = false;

  title = 'manifest';

  // Imagenes cards
  img1='assets/img/card-1.png';
  img2='assets/img/card-2.png';
  img3='assets/img/card-3.png';
  img4='assets/img/card-4.png';
  img5='assets/img/card-5.png';
  img6='assets/img/card-6.png';
  img7='assets/img/card-7.png';
  img8='assets/img/card-8.png';

  ngOnInit(){
    this.navService.showNav$.subscribe((value) => {
      this.showMobileMenu = value;
    });
  }

}
