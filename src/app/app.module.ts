import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

// Nota: (1) Importa módulos de firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Nota (2) Credenciales y configuración inicial de firebase
export const firebaseConfig = {
apiKey: "AIzaSyBIu0hgFOIJoONQhqZ-PdpoqdLnjJ5k4vY",
    authDomain: "tarea1-ca6ca.firebaseapp.com",
    databaseURL: "https://tarea1-ca6ca.firebaseio.com",
    projectId: "tarea1-ca6ca",
    storageBucket: "tarea1-ca6ca.appspot.com",
    messagingSenderId: "100479826167"
};

// Importa páginas (custom elements)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../providers/auth/auth.service';
import { NombrePage } from '../pages/nombre/nombre';
import { MessageProvider } from '../providers/message/message';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    NombrePage
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
    HomePage,
    LoginPage,
    SignupPage,
    NombrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Nota (4) Importa provider firebase database
    AngularFireDatabase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AngularFireAuth,
    MessageProvider,
    Camera
  ]
})
export class AppModule { }
