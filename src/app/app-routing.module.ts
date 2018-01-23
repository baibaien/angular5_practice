import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {HeroComponent} from './hero/hero.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {DirectiveComponent} from './directive/directive.component'
import {FlyingHeroesComponent} from "./flying-heroes/flying-heroes.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'heroes', component: HeroComponent
  },
  {
    path: 'detail/:id', component: HeroDetailComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'directive', component: DirectiveComponent
  },
  {
    path: 'pipe', component: FlyingHeroesComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
