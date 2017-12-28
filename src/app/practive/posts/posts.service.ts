import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppService} from '../../app.service';

import { Post } from './post';
import { POSTS} from './mock-posts';

@Injectable()
export class PostsService  extends AppService {

  public apiUrl = 'app/posts';
  constructor(http: Http) {
      super(http);
  }
    getPosts (): Observable<Post[]> {
        return this.http.get(this.apiUrl)
            .do(data => console.log(data))
            .map(res => res.json())
            .catch(this.handleError);
    }
}
