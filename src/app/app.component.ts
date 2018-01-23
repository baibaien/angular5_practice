import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:  `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  str = new String('little bitch');


  constructor() {

    // for(let obj of this.obj_array) {
    //   console.log('a', obj);
    // }
    interface Iterable {
      [Symbol.iterator]() : Iterator;
    }

    interface Iterator {
      next(value?: any) : IterationResult;
    }

    interface IterationResult {
      value: any;
      done: boolean
    }
  }
}
