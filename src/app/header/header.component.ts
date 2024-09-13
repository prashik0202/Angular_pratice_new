import { Component, isStandalone } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  onSelectUser(id: string) {
    console.log('Selected User Id : ' + id);
  }
}
