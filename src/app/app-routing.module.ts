import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
    /*canLoad: [AuthGuard],*/
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
