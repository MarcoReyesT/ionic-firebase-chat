import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';
import { MessageProvider } from '../../providers/message/message';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Arreglo "observable" con listado de mensajes
  messages: Observable<Message[]>;
  // Nuevo mensaje
  newMessage: string;

  constructor(public navCtrl: NavController, private _msgProvider: MessageProvider) {
    this.messages = _msgProvider.fetchAll();
  }

  send() {
    if (!this.newMessage) return;

    this._msgProvider.add({
      author: 'Anónimo',
      message: this.newMessage,
      date: new Date().toString()
    });
    this.newMessage = '';
  }

}
