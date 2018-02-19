import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    // <courses> 'courses'
    // <div class="courses"> '.courses'
    // <div id="courses"> '#courses'
    selector: 'app-courses',
    template: `
            <h2>{{ title }}</h2>
            <img [src]="" />
            <table>
                <tr>
                    <td [attr.colspan]="colSpan"></td>
                </tr>
            </table>
            `
})

export class CoursesComponent {
    title = 'List of courses';
    colSpan = 2;
    imageUrl = '';
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

}
