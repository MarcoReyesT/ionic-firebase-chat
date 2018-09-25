import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';
import { Content } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
import { Camera, CameraOptions } from '@ionic-native/camera';

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

  @ViewChild(Content) contenido: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _msgProvider: MessageProvider, private camera: Camera) {
    this.messages = _msgProvider.fetchAll();
    this.autor = this.navParams.get('alias');
  }
  ionViewCanEnter(){
    this.contenido.scrollToBottom();
  }

  send() {
    if (!this.newMessage) return;

    this._msgProvider.add({
      author: this.navParams.get('alias'),
      message: this.newMessage,
      date: new Date().toString()
    });
    this.newMessage = '';
    this.contenido.scrollToBottom();
  }

  takePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image.push('data:image/jpeg;base64,' + imageData);
    }, (err) => {
      // Handle error
      console.error('takePic error', err);
    });
  }

}
