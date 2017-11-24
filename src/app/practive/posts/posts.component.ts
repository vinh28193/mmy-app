import { Component, OnInit } from '@angular/core';

import { Post } from './post';

import { PostsService} from './posts.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    public posts: Post[];
    public nextPost;
    public activePost: Post;
    public previousPost;
    public isList = true;
    constructor(private postsService: PostsService) { }

    ngOnInit() {
        this.getPosts();
    }
    public getPosts() {
        return this.postsService.getPosts().subscribe(posts => this.posts = posts);
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
