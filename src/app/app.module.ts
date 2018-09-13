import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Nota: (1) Importa módulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Nota (2) Credenciales y configuración inicial de firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAhO3HE7We3xMb-k9JHtB3HcwCKaxL1G7A",
  authDomain: "app-icc714-2018-sem-2.firebaseapp.com",
  databaseURL: "https://app-icc714-2018-sem-2.firebaseio.com",
  projectId: "app-icc714-2018-sem-2",
  storageBucket: "app-icc714-2018-sem-2.appspot.com",
  messagingSenderId: "723970279214"
};

// Importa páginas (custom elements)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Nota (3) Importa módulos
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Nota (4) Importa provider firebase database
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
