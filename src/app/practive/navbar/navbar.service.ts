import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AppService} from '../../app.service';

import { Nav } from './nav';

@Injectable()
export class NavbarService extends AppService{

    constructor(http: Http) {
        super(http);
    }
    getNav (): Observable<Nav[]> {
        return this.http.get(this.getApiURL('navs'))
            .do(data => console.log(data))
            .map(res => res.json())
            .catch(this.handleError);
    }
}
