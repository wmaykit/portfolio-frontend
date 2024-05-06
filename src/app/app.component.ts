import { Component, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LinksEnum } from './core/enums/links.enum';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatDrawer) private readonly matDrawer: MatDrawer | undefined;
  readonly title = 'kabanyok-artyom';
  readonly RESUME_URL = LinksEnum.CV;

  constructor(router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.matDrawer?.toggle(false)
      }
    })
    iconRegistry.addSvgIcon('external', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/external.svg'));
  }
}
