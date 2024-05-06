import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { LinksEnum } from '../../enums/links.enum';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() toggle: EventEmitter<boolean | undefined> = new EventEmitter<boolean | undefined>()
  RESUME_URL = LinksEnum.CV;
  isSmall: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmall = breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).pipe(map((state) => !state.matches))
    this.isSmall.subscribe((isSmall) => isSmall && this.toggle.emit(false))
  }
}
