import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private showNavSubject = new BehaviorSubject<boolean>(true);

  showNav$ = this.showNavSubject.asObservable();

  updateNav(value: boolean) {
    this.showNavSubject.next(value);
    console.log("Entra servicio")
  }
}
