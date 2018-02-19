import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    // <courses> 'courses'
    // <div class="courses"> '.courses'
    // <div id="courses"> '#courses'
    selector: 'app-courses',
    template: `
            <!-- 
            old way
            <input (keyup.enter)="onKepUp($event)" />
            -->
            <input #email (keyup.enter)="onKepUp(email.value)" />
            `
})

export class CoursesComponent {
    // old way
    // onKepUp($event) {
    //    console.log($event.target.value);
    // }
    onKepUp(email) {
            console.log(email);
    }
}

