import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./shared/card/card.component";
import { LayoutImgLeftComponent } from "./shared/layout/layout-img-left/layout-img-left.component";
import { LayoutImgRightComponent } from "./shared/layout/layout-img-right/layout-img-right.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, LayoutImgLeftComponent, LayoutImgRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'manifest';
  img1='assets/img/card-1.png';
  img2='assets/img/card-2.png';
  img3='assets/img/card-3.png';
  img4='assets/img/card-4.png';
  img5='assets/img/card-5.png';
  img6='assets/img/card-6.png';
  img7='assets/img/card-7.png';
  img8='assets/img/card-8.png';
}
