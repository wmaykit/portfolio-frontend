import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MyContactsEnum } from '../../enums/my-contacts.enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  githubUrl = MyContactsEnum.githubUrl
  linkedinUrl = MyContactsEnum.linkedinUrl
  email = MyContactsEnum.email
  skype = MyContactsEnum.skypeShareLink

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
    iconRegistry.addSvgIcon('linkedin', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon('skype', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/skype.svg'));
  }

  ngOnInit(): void {
  }

}
