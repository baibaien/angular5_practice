import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero'
import {HeroService} from '../hero.service'
import {MessageService} from '../message.service'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public name: string;
  heros: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'windstorm'
  };

  atest = 1;
  foo;
  obj_array: any = {
    1: 'a',
    2: 'b',
    3: 'c',
    [Symbol.iterator]():any { console.log(this);return {next: this.next()}},
    next() {
      let current = 0;
      let that = this;
      return function() {
        console.log('this?', that);
        current ++;
        if(current in that) {
          return {
            value: that[current]
          }
        }else {
          return {
            done: true
          }
        }
      }
    }
  };
  constructor(public heroService: HeroService,
              public msgService: MessageService) {
    let temp = this.obj_array[Symbol.iterator]();
    for(let obj of this.obj_array) {
      console.log('obj', obj);
    }
    let arr1 = [...this.obj_array];
    // console.log('?arr', arr1);
    // let m = temp.next();
    // console.log(m);
    // let n = temp.next();
    // console.log(n);
    // let t = temp.next();
    // console.log(t);
    for (let obj in this.obj_array) {
      console.log('obj', obj);
    }
    enum Color {Red = 1, Green, Blue}
    let arr: [string, number] = ['1', 2];
    let [x, y] = arr;
    arr[2] = 'e';
    console.log(arr, x, y);
    let [, second, , fourth] = [1, 2, 3, 4];
    console.log(second, fourth);
    // let a;
    // let b;
    let {a: newA, b: newB}: { a: string; b: number } = {a: "baz", b: 101};
    console.log(newA, newB)
    function keepWholeObject(wholeObject: { a?: string; b: number }) {
      // b?:number，可为缺省值
      let {a, b = 100} = wholeObject;
      // b 设置默认值
      console.log(wholeObject, a, b)
    };
    keepWholeObject({b: 33});
    type C = { a: string, b?: number }
    function f({a, b}: C): void {
      console.log(a, b)
      // ...
    }

    f({a: '??'});
    // this.strLength = (someValue as string).length;
    interface LabelledValue {
      label?: string;
      [propName: string]: any
    }

    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }

    let myObj = {size: 10};
    printLabel(myObj);
    interface SquareConfig {
      color?: string;
      width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
      // ...
      return {
        color: 'red',
        area: 2
      }
    }

    let mySquare = createSquare({colour: "red", width: 100} as SquareConfig);
    interface StringArray {
      [index: number]: string;
      // name: number;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];

    let myStr: string = myArray[0];

    // class Animal {
    //   move(distanceInMeters: number = 0) {
    //     console.log(`Animal moved ${distanceInMeters}m.`);
    //   }
    // }
    //
    // class Dog extends Animal {
    //   // constructor() {
    //   //   super();
    //   // }
    //   bark() {
    //     console.log('Woof! Woof!');
    //   }
    //   dogMove(InMeters: number = 0) {
    //     this.move(InMeters);
    //   }
    // }
    //
    // const dog = new Dog();
    // dog.bark();
    // dog.move(10);
    // dog.bark();
    // dog.dogMove(20);
    class Animal {
      private name: string;

      constructor(theName: string) {
        this.name = theName;
      }
    }

    class Rhino extends Animal {
      constructor() {
        super("Rhino");
      }
    }

    class Employee {
      private name: string;

      constructor(theName: string) {
        this.name = theName
      }
    }

    let animal = new Animal("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // animal = employee; // 错误: Animal 与 Employee 不兼容.
    console.log(animal);
    class Str {
      private getString(str) {
        console.log(str);
        return str;
      }

      public name;

      constructor() {
        this.name = this.getString('?')
      }
    }
    class Anotherstr extends Str {
      // constructor() {
      //   super();
      // }
      public name;

      getstr() {
        return this.name;
      }
    }
    let str = new Anotherstr();
    str.getstr();
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.msgService.add('HeroService: fetched heroes');
    this.heroService.getHeroes()
      .subscribe(heroes => this.heros = heroes);
  }

  getNumber(): number {
    return 2
  }

  private onSelectHero(hero: Hero) {
    this.selectedHero = hero
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      })
  }
}

