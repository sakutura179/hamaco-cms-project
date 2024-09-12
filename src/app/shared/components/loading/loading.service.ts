import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading$ = new BehaviorSubject<boolean>(false);

  show() {
    this.loading$.next(true);
    console.log('show');
  }

  hide() {
    this.loading$.next(false);
    console.log('hide');
  }
}
