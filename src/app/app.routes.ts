import { Routes } from '@angular/router';
import { DesktopComponent } from './components/desktop/desktop.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'desktop',
        pathMatch:'full'
      },
      {
        path:'desktop',
        component:DesktopComponent
      }
];
