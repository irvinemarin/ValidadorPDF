import {BrowserModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {DragDropModule} from "@angular/cdk/drag-drop";

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {NgChartsModule} from "ng2-charts";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {ValidadordocumentosComponent} from './client/validadordocumentos/validadordocumentos.component';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";

@NgModule({
  declarations: [
    AppComponent,
    ValidadordocumentosComponent
  ],
  imports: [
    PdfViewerModule,
    MatSnackBarModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    NgChartsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {

}

