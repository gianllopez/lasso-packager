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
  { path: 'information',
    loadChildren: () =>
      import('./pages/info-center/info-center.module').then(m => m.InfoCenterModule) },
  { path: 'download',
    loadChildren: () =>
      import('./pages/download-center/download-center.module').then(m => m.DownloadCenterModule) }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]})
export class AppRoutingModule {};
