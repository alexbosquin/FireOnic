import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Database
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


export const firebaseConfig = {
    apiKey: "AIzaSyDHLyGnUQlsR9aGIel_fPlX8gvvuVum3OQ",
    authDomain: "fireonic-cool.firebaseapp.com",
    databaseURL: "https://fireonic-cool.firebaseio.com",
    projectId: "fireonic-cool",
    storageBucket: "fireonic-cool.appspot.com",
    messagingSenderId: "392886439911"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
