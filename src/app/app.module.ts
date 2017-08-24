import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxWrapperComponent } from './components/box-wrapper/box-wrapper.component';
import { JoyDirective } from './dircetives/joy/joy.directive';
import { SadnessDirective } from './dircetives/sadness/sadness.directive';
import { AdderComponent } from './adder/adder.component';
import { AaaComponent } from './components/aaa/aaa.component';
import { MatrixComponent } from './components/matrix/matrix.component';
import { MatrixService } from './services/matrix/matrix.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxWrapperComponent,
    JoyDirective,
    AdderComponent,
    SadnessDirective,
    AaaComponent,
    MatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MatrixService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
