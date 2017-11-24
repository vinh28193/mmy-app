import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AppService} from '../../app.service';

import { Post } from './post';
import { POSTS} from './mock-posts';

@Injectable()
export class PostsService  extends AppService {

  constructor(http: HttpClient) {
      super(http);
  }
  public getPosts(): Observable <any> {
    return of(POSTS).pipe(
        tap(posts => this.log('Load Data Ok')),
    );
  }
}
