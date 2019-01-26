import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent} from './onboard/onboard.component'
import { VerifyComponent} from './verify/verify.component'
import { RequestaccessComponent} from './requestaccess/requestaccess.component'

const routes: Routes = [
{ path: 'onboard', component: OnboardComponent },
{ path: 'verify', component: VerifyComponent},
{ path: 'requestaccess', component: RequestaccessComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
