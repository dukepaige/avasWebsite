import { Route } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const appRoutes: Route[] = [
  { path: '', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent},
];
