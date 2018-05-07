import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnijeffComponent } from './anijeff/anijeff.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
{path: 'home', component: AnijeffComponent},
{path: 'contact', component: ContactComponent},
{path: 'reviews', component:ReviewsComponent},
{path: '**', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



