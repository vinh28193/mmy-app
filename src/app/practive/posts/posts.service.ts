import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppService} from '../../app.service';

import { Post } from './post';

@Injectable()
export class PostsService  extends AppService {
  constructor(http: Http) {
      super(http);
  }
    getPosts (): Observable<Post[]> {
        return this.http.get(this.getApiURL('posts'))
            .do(data => console.log(data))
            .map(res => res.json())
            .catch(this.handleError);
    }
}
