import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the NombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nombre',
  templateUrl: 'nombre.html',
})
export class NombrePage {
	alias: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  aceptar() {
		if (!this.alias) {
			return;
		}
    this.navCtrl.push(HomePage, {alias: this.alias});

    }

}
