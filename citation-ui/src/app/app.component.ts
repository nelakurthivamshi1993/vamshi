import { Component } from '@angular/core';
import { CitationListComponent } from './citation-list/citation-list.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CitationListComponent, HomeComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citation-ui';
}