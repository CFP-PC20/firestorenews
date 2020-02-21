import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';   
import { environment } from 'src/environments/environment';
import { ServicioService } from './servicio.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                                                                                      
    ReactiveFormsModule,
    RouterModule.forRoot([                                                                            
      { path: '', redirectTo: 'blog', pathMatch: 'full' },                                          
      { path: 'blog', component: BlogComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', component: ErrorComponent },                                               
    ]),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFirestore,                                                                                 
    ServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
