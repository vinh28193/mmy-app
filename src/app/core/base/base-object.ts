import {Configurable} from './configurable';

export class BaseObject implements Configurable {

    constructor(config: any = {} || {}) {
        Object.assign(this, config);
        this.init();
    }

    public init() {
    }
}
