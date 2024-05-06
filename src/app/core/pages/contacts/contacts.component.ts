import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MyContactsEnum } from '../../enums/my-contacts.enum';

@Component({
  selector: 'portfolio-contacts',
  templateUrl: './contacts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  protected readonly MyContactsEnum = MyContactsEnum;

  constructor() { }

  trimProtocol(url: string): string {
    if (url.includes('https://')) {
      return url.substring(8);
    } else if (url.includes('http://')) {
      return url.substring(7);
    } else {
      return url;
    }
  }

  parseUserNameFromTelegramUrl(url: string): string {
    return url.substring(url.lastIndexOf('/') + 1);
  }
}
