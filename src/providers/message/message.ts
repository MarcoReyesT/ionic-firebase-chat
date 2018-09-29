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

  //messages: AngularFireList<Message>;

  constructor(private _db: AngularFireDatabase) {
    this._db.list<Message>('messages').valueChanges();
  }

  fetchAll() {
    return this._db.list<Message>('messages').valueChanges();
    //return this.messages;
  }

  add(msg: Message) {
    this._db.list<Message>('messages').push(msg);
  }

  delete(msg: any) {
    //this._db.list<Message>('messages/' + msg).remove();
    //this._db.list('messages').remove(msg);
    //this.messages.remove(msg);
  		console.log(msg.$key);
  }

}
