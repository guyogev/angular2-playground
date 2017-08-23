import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxWrapperComponent } from './components/box-wrapper/box-wrapper.component';
import { JoyDirective } from './dircetives/joy/joy.directive';
import { SadnessDirective } from './dircetives/sadness/sadness.directive';
import { AdderComponent } from './adder/adder.component';
import { AaaComponent } from './components/aaa/aaa.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxWrapperComponent,
    JoyDirective,
    AdderComponent,
    SadnessDirective,
    AaaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
