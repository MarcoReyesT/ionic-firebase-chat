import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';
import { Content } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { AuthService } from '../../providers/auth/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Arreglo "observable" con listado de mensajes
  messages: Observable<Message[]>;
  // Nuevo mensaje
  newMessage: string;
  base64Image: string[];
  autor: string;
  sesion: AuthService;

  @ViewChild(Content) contenido: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _msgProvider: MessageProvider, private auth: AuthService) {
    this.messages = _msgProvider.fetchAll();
    this.sesion = auth;
    //this.autor = this.navParams.get('alias');
  }
  ionViewDidEnter(){
    this.contenido.scrollToBottom();
  }

  send() {
    if (!this.newMessage && this.sesion.authenticated()) return;

    this._msgProvider.add({
      //author: this.navParams.get('alias'),
      email: this.sesion.getEmail(),
      author: "Anónimo",
      message: this.newMessage,
      date: new Date().toString()
    });
    this.newMessage = '';
    this.contenido.scrollToBottom();
  }

  takePic() {

  }

  eliminar() {

  }

}
