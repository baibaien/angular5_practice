import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HeroService} from './hero.service'
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import {FormsModule} from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageComponent } from './message/message.component';
import {MessageService} from "./message.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from './http.service';
import {DirectiveComponent, Popup, Tooltip, UnlessDirective} from './directive/directive.component';
import { PipeTestPipe } from './pipe-test.pipe';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';
import { PipeImpureTestPipe } from './pipe-impure-test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    MessageComponent,
    DashboardComponent,
    DirectiveComponent,
    Popup,
    UnlessDirective,
    Tooltip,
    PipeTestPipe,
    FlyingHeroesComponent,
    PipeImpureTestPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroService,
    MessageService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
