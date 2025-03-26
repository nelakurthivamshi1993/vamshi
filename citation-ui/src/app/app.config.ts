import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { CitationListComponent } from './citation-list/citation-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'citations', component: CitationListComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};