import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() toggle: EventEmitter<boolean | undefined> = new EventEmitter<boolean | undefined>()
  isSmall: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmall = breakpointObserver.observe(Breakpoints.XSmall).pipe(map((state) => !state.matches))
    this.isSmall.subscribe((isSmall) => isSmall && this.toggle.emit(false))
  }

  ngOnInit(): void {
  }
}
