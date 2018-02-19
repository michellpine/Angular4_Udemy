import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    // <courses> 'courses'
    // <div class="courses"> '.courses'
    // <div id="courses"> '#courses'
    selector: 'app-courses',
    template: `
            <button class="btn btn-primary" [class.active]="isActive">Save</button>
            `
})

export class CoursesComponent {
    isActive = false;
}
