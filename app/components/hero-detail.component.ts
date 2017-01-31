import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.services';
import { Hero } from '../classes/hero';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-hero-detail',
    templateUrl: '../template/herodetail.component.html'
})
export class HeroDetailComponent implements OnInit {
    
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ){}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}