/**
 * Created by nabokov on 16.05.2017.
 */

export function isValid(store) {
    const fields = store.form;
    for (let key in fields) {
        if( fields.hasOwnProperty(key) && fields[key].textError ){
            return false;
        }
    }
    return true;
}

export function getFieldValue(store, fieldName) {
     // eslint-disable-next-line
    return store.form && store.form[fieldName] && store.form[fieldName].value|| void 0;
}

export function values(store) {
    const fields = store.form;
    const values = {};
    for (let key in fields) {
        if( fields.hasOwnProperty(key) && fields[key].value ){
            values[key] = fields[key].value
        }
    }
    return values;
}