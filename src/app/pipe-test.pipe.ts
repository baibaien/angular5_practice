import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTest'
})
export class PipeTestPipe implements PipeTransform {

  transform(allHeroes: Flyer[], args?: any): any {
    let heroes: Flyer[];
    return allHeroes.filter(hero => hero.canFly);
  }

}
class Flyer {canFly: boolean; name: string}

