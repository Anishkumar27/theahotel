import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { CeleberationsComponent } from './celeberations/celeberations.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { BarsComponent} from './food-and-beverage/bars/bars.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternsWeddingsComponent} from './weddings/westerns-weddings/westerns-weddings.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'celebrations', component: CeleberationsComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'bars', component: BarsComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'thai-weddings', component: ThaiWeddingsComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'excursions', component: ExcursionsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'resort-activities', component: ResortActivitiesComponent },
  { path: 'wellness-and-spa', component: WellnessAndSpaComponent },
  { path: 'westerns-weddings', component: WesternsWeddingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
