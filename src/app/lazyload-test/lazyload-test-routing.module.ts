import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DirectiveComponent} from "../directive/directive.component";
import {FlyingHeroesComponent} from "../flying-heroes/flying-heroes.component";
import {LazyloadTestComponent} from "./lazyload-test.component";

const routes: Routes = [{
  path: '', redirectTo: 'index', pathMatch: 'full'
},
  {
    path: 'directive', component: DirectiveComponent
  },
  {
    path: 'pipe', component: FlyingHeroesComponent
  },
  {
    path: 'index', component: LazyloadTestComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadTestRoutingModule {
}
