import {ExtraOptions, Routes, PreloadAllModules} from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'contacts'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
