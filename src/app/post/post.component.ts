import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {
    http.get(this.url)
    .subscribe(response => {
      console.log(response.json());
      this.posts = response.json();
    });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = ' '
      this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
        console.log(response.json);
      })
  }
}