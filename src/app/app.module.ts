import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapService } from './googleMapService';


@NgModule({
  declarations: [AppComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsBy-fZP6s_J-pRfM5tJQHjKFvAXg5o_I',
      libraries: ['places', 'geometry']
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [GoogleMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
