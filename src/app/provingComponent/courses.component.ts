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
            <input (keyup)="onKepUp($event)" />
            -->
            <!-- event filtering -->
            <input (keyup.enter)="onKepUp()" />
            `
})

export class CoursesComponent {
    onKepUp() {
        console.log("Enter was presed");
    }
}

