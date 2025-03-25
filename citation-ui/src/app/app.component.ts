import { Component } from '@angular/core';
import { CitationListComponent } from './citation-list/citation-list.component'; // Import the component

@Component({
  selector: 'app-root',
  standalone: true, // Make sure 'standalone' is set to true
  imports: [CitationListComponent], // Import the component here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citation-ui';
}