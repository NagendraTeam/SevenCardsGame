import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AddKeyComponent } from './components/add-key/add-key.component'
import { CreateRoomComponent } from './components/create-room/create-room.component'
import { GameStartComponent } from './components/game-start/game-start.component';
import { GameSettingComponent } from './components/game-setting/game-setting.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddKeyComponent,
    CreateRoomComponent,
    GameStartComponent,
    GameSettingComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
