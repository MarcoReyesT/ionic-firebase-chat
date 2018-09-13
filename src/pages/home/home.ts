import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Arreglo "observable" con listado de mensajes
  messages: Observable<Message[]>;
  // Nuevo mensaje
  newMessage: string;

  constructor(public navCtrl: NavController, private _db: AngularFireDatabase) {
    this.messages = this._db.list<Message>('messages').valueChanges();
  }

  send() {
    this._db.list('messages').push({
      author: 'Anónimo',
      message: this.newMessage,
    });
    this.newMessage = '';
  }

}
