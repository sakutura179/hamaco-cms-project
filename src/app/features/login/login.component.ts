import { Component, inject } from '@angular/core';
import { LoadingService } from '../../shared/components/loading/loading.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private loadingService = inject(LoadingService);
  currentMode: 'LOGIN' | 'FORGOT' = 'LOGIN';

  changeMode() {
    this.loadingService.show();
    if (this.currentMode == 'LOGIN') {
      this.currentMode = 'FORGOT';
    } else {
      this.currentMode = 'LOGIN';
    }
    setTimeout(() => {
      this.loadingService.hide();
    }, 200);
  }

}
