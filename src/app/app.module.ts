import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { PostComponent } from './post/post.component';

// Convierte un clase de TypeScript a Angular
@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  // register all dependencies that components
  // in this module are dependent
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
