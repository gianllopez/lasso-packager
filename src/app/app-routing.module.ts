import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { waveLottie: 'blue-waves.json'} },
  { path: 'create',
    loadChildren: () =>
      import('./pages/create/create.module').then(m => m.CreateModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]})
export class AppRoutingModule {};
