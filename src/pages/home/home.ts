import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Message } from '../../common/message';
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

  constructor(public navCtrl: NavController, private _msgProvider: MessageProvider, private camera: Camera) {
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
