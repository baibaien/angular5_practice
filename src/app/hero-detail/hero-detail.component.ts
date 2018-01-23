import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero'
import {Location} from '@angular/common';
// import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
  }

  ngOnInit() {
    // this.getHero();
    this.getUrlHeroes();
  }
  getHero() {
    let id = Number(this.activatedRoute.snapshot.params['id']);
    this.heroService.getHero(id)
      .subscribe(heroes => { this.hero = heroes[0]});
    console.log(this.hero);
  }
  getUrlHeroes() {
    this.heroService.getUrlHeroes()
      .subscribe(res => console.log(res));
  }

}
