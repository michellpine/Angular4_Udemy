import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent  {
  tickets: any[];
  API_ENDPOINT = 'http://localhost:8282/api/vehicles/';
  //API = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    http.get(this.API_ENDPOINT)
    .subscribe(response => {
      console.log(response.json());
      this.tickets = response.json();
    });
  }
}
