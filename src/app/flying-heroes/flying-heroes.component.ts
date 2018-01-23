import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
import {HeroArray} from '../hero-mock'

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent implements OnInit {
  heroes: any[] = [];
  canFly = true;
  constructor() { this.reset()}

  ngOnInit() {
  }
  reset() {
    this.heroes = [];
  }
  addHero(name: string) {
    name = name.trim();
    if(!name) {return};
    let hero = {name, canFly: this.canFly};
    // let herotest = this.heroes.concat([]);
    // herotest.push(hero);
    // this.heroes = herotest;
    this.heroes.push(hero);
  }
}
