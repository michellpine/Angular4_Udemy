import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './courses/summary.pipe';
import { CoursesService } from './courses/courses.service';

// Convierte un clase de TypeScript a Angular
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    LikeComponent
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
