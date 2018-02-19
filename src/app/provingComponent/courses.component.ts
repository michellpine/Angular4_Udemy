import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    // <courses> 'courses'
    // <div class="courses"> '.courses'
    // <div id="courses"> '#courses'
    selector: 'app-courses',
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>
            </ul>`
})

export class CoursesComponents {
    title = 'List of courses';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
