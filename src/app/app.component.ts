import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };
  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
  ];
  subjects;
  viewMode = 'a';
  canSave = true;

  task = {
    title: 'Review applications',
    assignee: null
    /*{
      name: 'John Smith'
    }*/
  };
  onAdd() {
    this.courses.push({ id: 4, name: 'course4' });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = 'Updated';
  }

  loadSubjects() {
    this.subjects = [
      { id: 1, name: 'subject1' },
      { id: 2, name: 'subject2' },
      { id: 3, name: 'subject3' }
    ];
  }

  trackCourse(index, subject) {
    return subject ? subject.id : undefined;
  }
}

