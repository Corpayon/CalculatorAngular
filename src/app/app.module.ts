import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LogInComponent } from './log-in/log-in.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: LogInComponent},
      {path: 'calculator', component: CalculatorComponent, canActivate: [AuthService]},
     // {path: '', component: AppComponent},
    ]),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


