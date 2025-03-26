import { Component } from '@angular/core';
import { CitationListComponent } from './citation-list/citation-list.component';
import { RouterOutlet, RouterLink } from '@angular/router'; // Import RouterOutlet and RouterLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CitationListComponent, RouterOutlet, RouterLink], // Import RouterOutlet and RouterLink
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citation-ui';
}