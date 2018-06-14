import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import { CardVertComponent } from './cards/card-vert/card-vert.component';
import { CardHorizComponent } from './cards/card-horiz/card-horiz.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './services/message.service';


@NgModule({
    declarations: [
        AppComponent,
        CardVertComponent,
        CardHorizComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MDBBootstrapModule.forRoot()
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
