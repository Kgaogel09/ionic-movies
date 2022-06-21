import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesPageModule),
  },
  {
    path: 'movies',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies/:movieId',
    loadChildren: () =>
      import('./pages/movies-details/movies-details.module').then(
        (m) => m.MoviesDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
