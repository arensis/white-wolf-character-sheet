import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StyleManagerService } from '../shared/services/style-manager.service';

interface GameOption {
  /** gameName key used across the app (i18n: game-title.<id>). */
  id: string;
  route: string;
  /** i18n key for the short tagline shown under the title. */
  taglineKey: string;
}

@Component({
  selector: 'arm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly games: GameOption[] = [
    { id: 'VAMPIRE_DARK_AGES', route: '/vampire-dark-ages', taglineKey: 'home.taglines.VAMPIRE_DARK_AGES' },
    { id: 'VAMPIRE_MASQUERADE', route: '/vampire-the-masquerade', taglineKey: 'home.taglines.VAMPIRE_MASQUERADE' },
  ];

  darkMode = this.styleManagerService.isDark;

  constructor(private router: Router, private styleManagerService: StyleManagerService) {}

  open(game: GameOption): void {
    this.router.navigate([game.route]);
  }

  toggleThemeMode(): void {
    this.styleManagerService.toggleDarkTheme();
    this.darkMode = !this.darkMode;
  }
}
