import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Message } from '../../common/message';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(private _db: AngularFireDatabase) { }

  fetchAll() {
    return this._db.list<Message>('messages').valueChanges();
  }

  add(msg: Message) {
    this._db.list('messages').push(msg);
  }

}
