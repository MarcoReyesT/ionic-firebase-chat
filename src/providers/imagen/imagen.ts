import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImagenProvider {


  base64Image: string[];

  constructor(private _db: AngularFireDatabase) { }

  add(imagen: any) {
    const options: CameraOptions = {
      quality: 100,
      //destinationType: this.camera.DestinationType.DATA_URL,
      //encodingType: this.camera.EncodingType.JPEG,
      //mediaType: this.camera.MediaType.PICTURE
    }

    //this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //this.base64Image.push('data:image/jpeg;base64,' + imageData);
    //}, (err) => {
      // Handle error
      //console.error('takePic error', err);
    //});
  }

}
