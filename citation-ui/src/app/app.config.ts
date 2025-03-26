import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { CitationListComponent } from './citation-list/citation-list.component';


const routes: Routes = [
  { path: 'citations', component: CitationListComponent },
  { path: '', redirectTo: '/citations', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};