import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment} from '../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


interface Res {
    susscess: boolean;
    messages: string;
    data: any;
}
@Injectable()
export class AppService {
    public API_URL;
    public messages = [];
    protected options;
    constructor(protected http: Http) {
        this.options = { headers: new Headers({ 'Content-Type': 'application/json' })};
        this.API_URL = environment.API_URL;
    }
    public getApiURL(url) {
        return `${this.API_URL}/${url}`;
    }
    public handleError (error: Response) {
        // In a real world app, we might send the error to remote logging infrastructure
        // and reformat for user consumption
        console.error(error); // log to console instead
        return Observable.throw(error);
    }
    public log(msg) {
        this.messages.push(msg);
        console.log(this.messages);
    }
}