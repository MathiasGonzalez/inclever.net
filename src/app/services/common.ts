import {Injectable } from "@angular/core"

@Injectable()
export class Common {
    /**
     * 
     * 
     * @static
     * @param {*} val
     * @returns {boolean}
     */
    public  isNull(val: any): boolean {
        return val === null || val === undefined;
    }
    /**
     * 
     * 
     * @static
     * @param {*} val
     * @returns {boolean}
     */
    public isNotNull(val: any): boolean {
        return !this.isNull(val);
    }

    constructor(){

    }

}