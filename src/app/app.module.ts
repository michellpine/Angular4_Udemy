import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponents } from './provingComponent/courses.component';
import { CourseComponent } from './course/course.component';

// Convierte un clase de TypeScript a Angular
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
