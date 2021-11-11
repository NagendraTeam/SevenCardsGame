import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKeyComponent } from './components/add-key/add-key.component';
import { CreateRoomComponent } from './components/create-room/create-room.component';
import { GameSettingComponent } from './components/game-setting/game-setting.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  }, {
    path: 'components',
    children: [
      {
        path: '',
        redirectTo: '/game-setting',
        pathMatch: 'full'
      },
      {
        path: 'game-setting',
        component: GameSettingComponent
      },
      {
        path: '',
        redirectTo: '/create-room',
        pathMatch: 'full'
      },
      {
        path: 'create-room',
        component: CreateRoomComponent
      },
      {
        path: '',
        redirectTo: '/add-key',
        pathMatch: 'full'
      },
      {
        path: 'add-key',
        component: AddKeyComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
