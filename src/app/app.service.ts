import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

interface Res {
    susscess: boolean;
    messages: string;
    data: any;
}
@Injectable()
export class AppService {
    public messages = [];
    protected options;
    constructor(protected http: HttpClient) {
        this.options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    public handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    public log(msg) {
        this.messages.push(msg);
        console.log(this.messages);
    }
}