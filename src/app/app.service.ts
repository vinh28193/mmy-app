import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface Res {
    susscess: boolean;
    messages: string;
    data: any;
}
@Injectable()
export class AppService {
    public messages = [];
    protected options;
    constructor(private http: HttpClient) { }
    protected get(url: string): Observable<any> {
        return this.http.get(url, this.options);
    }
    protected post(url: string, body: any | null) {
        return this.http.post(url, body, this.options);
    }
}
