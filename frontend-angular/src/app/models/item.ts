export class Item {
    _id?: string;
    opened?: any;
    modifying?: any;
}

export interface ItemTitle {
    kor: string,
    eng: string,
    jpn: string,
    rv: string
}

export function cloneObject(obj: any, excepts?: string[]): any {
    let clone = {};
    for (let key in obj) {
        if ( excepts ) if ( excepts.includes(key) ) continue;
        if ( typeof obj[key] == 'object' && obj[key] != null ) {
            if ( Array.isArray(obj[key]) ) {
                let arr = [];
                for (let each of obj[key]) {
                    if ( typeof each == 'object' ) arr.push(cloneObject(each));
                    else arr.push(each);
                }
                clone[key] = arr;
            } else clone[key] = cloneObject(obj[key]);

        } else clone[key] = obj[key];
    }
    return clone;
}

function isValid(s: string | number): boolean { return !(s == null || s === ''); }

export function isOK(obj: any, excepts?: string[]): boolean {
    if ( typeof obj != 'object' ) {
        if ( !isValid(obj) ) return false;
    } else {
        for (let key in obj) {
            if ( excepts ) if ( excepts.includes(key) ) continue;
            if ( typeof obj[key] != 'object' ) {
                if ( !isOK(obj[key]) ) return false;
            } else if ( Array.isArray(obj[key]) ) {
                for (let each of obj[key]) if ( !isOK(each) ) return false;
            } else {
                if ( !isOK(obj[key]) ) return false;
            }
        }
    }
    return true;
}

export function notOK(messages?: string[]) {
    this.flashMessage.showFlashMessage({
        messages: messages ? messages : ['비어있는 필드가 있습니다.'],
        type: 'danger',
        timeout: 3000});
}
