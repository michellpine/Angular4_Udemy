import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    selector: 'app-courses',
    template: `
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
            `
})

export class CoursesComponent {
    email = "me@exmaple.com";

    onKeyUp() {
        console.log(this.email);
    }
}

