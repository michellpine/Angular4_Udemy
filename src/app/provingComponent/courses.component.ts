import { Component } from '@angular/core';

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
    courses = ['course1', 'course2', 'course3'];

}
