import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {HeroComponent} from './hero/hero.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import {DirectiveComponent} from './directive/directive.component'
import {FlyingHeroesComponent} from "./flying-heroes/flying-heroes.component";
import {LazyloadTestModule} from "./lazyload-test/lazyload-test.module";
import {LazyloadTestRoutingModule} from "./lazyload-test/lazyload-test-routing.module";

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
    path: 'lazyload', loadChildren: './lazyload-test/lazyload-test.module#LazyloadTestModule'
  },
  // {
  //   path: '**', component: HeroComponent
  // }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    // LazyloadTestRoutingModule
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
