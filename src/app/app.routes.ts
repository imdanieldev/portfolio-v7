import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', component: HomeComponent, title: "Daniel Web Dev" },
    { path: 'about', component: AboutComponent , title: "Daniel Nasr - About Me" },
    { path: 'contact', component: ContactComponent , title: "Daniel Nasr - Contact Me"  },
    { path: '**', component: PageNotFoundComponent , title: "Daniel Nasr - 404" }
];
