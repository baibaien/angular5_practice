import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Hero} from './hero'
import {HeroArray} from './hero-mock'
import {Observable} from 'rxjs/Observable'
import {of} from 'rxjs/observable/of'
import {MessageService} from "./message.service";
import {catchError, map, tap} from 'rxjs/operators'

@Injectable()
export class HeroService {
  private heroUrl = 'https://saas-api.mayitest.cn/user/me/unread-notice-amount';
  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }
  getUrlHeroes(): Observable<Hero[]> {
    return this.http.request<Hero[]>('get', this.heroUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getUrlHeroes', []))
      );
  }
  getHeroes(): Observable<Hero[]> {
    return of(HeroArray)
  }

  getHero(id): Observable<Hero[]> {
    return of(HeroArray.filter((hero) => {
      return hero.id == id
    }));
  }
  private log(message: string) {
    this.messageService.add(`HeroSerivce ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('error', error);

      return of(result as T);
    }
  }
  addHero(hero: Hero): Observable<Hero> {
    const httpOptions = {
      headers: new HttpHeaders({'content-type': 'application/json'})
    };
    return this.http.post<Hero>(this.heroUrl, hero, httpOptions)
      .pipe(
        tap((hero: Hero) => this.log('added hero ')),
        catchError(this.handleError<Hero>('addHero'))
      )
  }
}
