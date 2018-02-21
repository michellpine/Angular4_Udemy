import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

// Convierte un clase de TypeScript a Angular
@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    SignupFormComponent,
    NewCourseComponent,
    ChangePasswordComponent
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
