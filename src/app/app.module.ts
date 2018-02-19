import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './provingComponent/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummaryPipe } from './provingComponent/summary.pipe';
import { PanelComponent } from './panel/panel.component';

// Convierte un clase de TypeScript a Angular
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // register all dependencies that components
  // in this module are dependent
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
