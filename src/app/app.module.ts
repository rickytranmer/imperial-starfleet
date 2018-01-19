import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';


@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
