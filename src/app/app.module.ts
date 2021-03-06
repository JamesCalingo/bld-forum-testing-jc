import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { environment } from '../environments/environment';
import { ProfileComponent } from './containers/profile/profile.component';
import { PostsModule } from './containers/posts/posts.module';
import { AuthGuard } from './providers/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './containers/about/about.component';
import { PrivacyComponent } from './containers/privacy/privacy.component';

const config = {
  apiKey: "AIzaSyAglB_jlyocm0ehuwM_M4552FjPVOYzkJk",
  authDomain: "forum-local-test.firebaseapp.com",
  databaseURL: "https://forum-local-test.firebaseio.com",
  projectId: "forum-local-test",
  storageBucket: "forum-local-test.appspot.com",
  messagingSenderId: "134793263930",
  appId: "1:134793263930:web:117505c74eda373397ae03",
  measurementId: "G-ZD822JF8GC"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    AboutComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,

    PostsModule,

    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
