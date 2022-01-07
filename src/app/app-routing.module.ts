import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './core/pages/personal/personal.component';
import { ProfessionalComponent } from './core/pages/professional/professional.component';

const routes: Routes = [
  { path: '', component: ProfessionalComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'personal', component: PersonalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
