import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FighterListComponent } from './fighter-list/fighter-list.component';
import { CreateFighterComponent } from './create-fighter/create-fighter.component';
import { UpdateFighterComponent } from './update-fighter/update-fighter.component';
import { FighterDetailsComponent } from './fighter-details/fighter-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'fighters', component: FighterListComponent},
  {path: 'create-fighter', component: CreateFighterComponent},
  {path: 'update-fighter/:id', component: UpdateFighterComponent},
  {path: 'fighter-details/:id', component: FighterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
