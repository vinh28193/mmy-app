import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { POSTS} from './mock-posts';
import {count} from "rxjs/operators";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public posts: Post[];
    public totalPost;
    public nextPost;
    public activePost: Post;
    public previousPost;
    public isList = true;
    constructor() { }

    ngOnInit() {
        this.getPosts();
    }
    public getPosts() {
        this.posts = POSTS;
        this.previousPost = 1;
        this.nextPost = 1;
        console.log(this.posts);
    }
    onSelect(post: any): void {
        if (post == null) {
            this.isList = true;
        } else {
            this.isList = false;
            this.activePost = post;
        }
    }
    onChange(action: string, id: number) {
        if (action === 'next') {
            this.nextPost = id;
        }else if (action === 'previous') {
            this.previousPost = id;
        }else {
            alert('not found');
        }
    }
}
