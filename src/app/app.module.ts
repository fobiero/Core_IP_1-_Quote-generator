import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FormComponent } from './component/form/form.component';
import { QuotesComponent } from './component/quotes/quotes.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './component/counter/counter.component';
import { GetQuotesComponent } from './component/get-quotes/get-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    QuotesComponent,
    CounterComponent,
    GetQuotesComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
