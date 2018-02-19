import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponents } from './provingComponent/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';

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
  // register all dependencies that components
  // in this module are dependent
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
