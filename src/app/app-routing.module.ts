import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './landing-page/overview/overview.component';
import CommonConstants from './shared/common-constants';

const routes: Routes = [
  { path: '', redirectTo: '/Landing', pathMatch: 'full' },
  {
    path: CommonConstants.ModulesRoutes.find(e => e.key == CommonConstants.Landing)?.value,
    loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule)
  },
  {
    path: CommonConstants.ModulesRoutes.find(e => e.key == CommonConstants.AddTransaction)?.value,
    loadChildren: () => import('./add-transaction/add-transaction.module').then(m => m.AddTransactionModule)
  },
  { path: '**', redirectTo: '/Landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
