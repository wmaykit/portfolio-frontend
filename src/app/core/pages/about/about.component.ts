import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  isSmall: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmall = breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((state) => state.matches))
  }
}
