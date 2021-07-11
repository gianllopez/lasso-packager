import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create',
    loadChildren: () =>
      import('./pages/create/create.module').then(m => m.CreateModule) },
  { path: 'package',
    loadChildren: () =>
      import('./pages/package/package.module').then(m => m.PackageModule) },
  { path: 'help',
    loadChildren: () =>
      import('./pages/help/help.module').then(m => m.HelpModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [ RouterModule ]})
export class AppRoutingModule {};
