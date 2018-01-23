import { NgModule } from '@angular/core';

import {DirectiveComponent, Popup, Tooltip, UnlessDirective} from "../directive/directive.component";
import {FlyingHeroesComponent} from "../flying-heroes/flying-heroes.component";
import {PipeTestPipe} from "../pipe-test.pipe";
import {PipeImpureTestPipe} from "../pipe-impure-test.pipe";
import {CommonModule} from "@angular/common";
import {LazyloadTestRoutingModule} from "./lazyload-test-routing.module";
import {LazyloadTestComponent} from "./lazyload-test.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    LazyloadTestRoutingModule,
    FormsModule
  ],
  exports: [CommonModule],
  declarations: [
    LazyloadTestComponent,
    DirectiveComponent,
    FlyingHeroesComponent,
    UnlessDirective,
    Popup,
    Tooltip,
    PipeTestPipe,
    PipeImpureTestPipe
  ]
})
export class LazyloadTestModule {}
