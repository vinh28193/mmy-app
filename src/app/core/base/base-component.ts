import {BaseObject} from './base-object';
import {HttpClient} from '@angular/common/http';

export const config = {

};
export class BaseComponent extends BaseObject {
    public http: HttpClient;
}
