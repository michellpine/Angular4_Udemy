import { Component } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
    // <courses> 'courses'
    // <div class="courses"> '.courses'
    // <div id="courses"> '#courses'
    selector: 'app-courses',
    template: `
            <div (click)="onDivClicked($event)">
                <button (click)="onSave($event)">Save</button>
            </div>
            `
})

export class CoursesComponent {
    onDivClicked(){
        console.log("Div was clicked");
    }
    onSave($event) {
        $event.stopPropagation();
        console.log('Button was clicked', $event);
    }
}
