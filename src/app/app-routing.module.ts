import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'categories', component: CategoriesComponent },
	{ path: 'items', component: ItemsComponent },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'contacts', component: ContactsComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
