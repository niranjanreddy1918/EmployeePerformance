import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from './shared/notification-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatSnackBarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  constructor(private notify: NotificationService) {}

  protected readonly title = signal('employee-performance');
  isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      this.notify.success('Switched to Dark Theme');
    } else {
      document.body.classList.remove('dark-theme');
      this.notify.success('Switched to Light Theme');

    }
  }
}
