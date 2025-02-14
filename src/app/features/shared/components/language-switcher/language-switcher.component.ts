import {Component, inject, signal, WritableSignal} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  private translate = inject(TranslateService);
  selectedLang: WritableSignal<string> = signal(this.translate.currentLang || 'en');

  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translate.use(lang);
    this.selectedLang.set(lang);
  }
}
