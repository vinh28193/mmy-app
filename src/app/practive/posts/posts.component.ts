import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { POSTS} from './mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Post[];
  constructor() { }

  ngOnInit() {
    this.getPosts();
  }
  public getPosts() {
    this.posts = POSTS;
  }
}
