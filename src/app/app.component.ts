import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mode = 'light';

  toggleMode() {
    this.mode = this.mode === 'light' ? 'dark' : 'light';
  }
}
