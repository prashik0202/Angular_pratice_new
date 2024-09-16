import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  onSelectUser(id: string) {
    console.log('Selected User Id : ' + id);
  }
}
