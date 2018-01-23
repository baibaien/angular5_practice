import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  constructor() {
  }
  add(message: string) {
    this.messages.push(message);
    console.log('mes', this.messages);
  }

  clear() {
    this.messages = [];
  }

}
