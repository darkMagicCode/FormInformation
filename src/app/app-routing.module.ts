import { ThankUComponent } from './thank-u/thank-u.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBondComponent } from './form-bond/form-bond.component';


const routes: Routes = [
  {path:'thanks',component:ThankUComponent},
  {path:'',component:FormBondComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
