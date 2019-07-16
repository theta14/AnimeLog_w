export class Item {
    _id?: string;
    opened?: any;
    modifying?: any;
}

export function cloneObject(obj: any): any {
    let clone = {};
    for (let key in obj) {
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
