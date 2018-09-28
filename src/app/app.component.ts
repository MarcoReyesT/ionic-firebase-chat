import { Component } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ViewChild } from '@angular/core';
import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../providers/auth/auth.service';
import { NombrePage } from '../pages/nombre/nombre';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;
  private platform;
  statusBar: StatusBar;

  private menu: MenuController;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService) {
    platform.ready().then(() => {
      this.menu = menu;
      this.platform = platform;
      this.statusBar = statusBar;
      this.initializeApp();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      splashScreen.hide();
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        },
        () => {
          this.rootPage = LoginPage;
        }
      );
  }

  login() {
    this.menu.close();
  	this.auth.signOut();
  	this.nav.setRoot(LoginPage);
  }

  logout() {
  	this.menu.close();
  	this.auth.signOut();
  	this.nav.setRoot(HomePage);
  }
}
