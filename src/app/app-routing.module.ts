import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import {ScopeGuardService} from './services/ScopeGuardService';
import {CallbackComponent} from './components/callback/callback.component';
import {LogoutComponent} from './components/logout/logout.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ScopeGuardService],
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'products/:productSlug',
    component: ProductDetailsComponent
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [ScopeGuardService],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
