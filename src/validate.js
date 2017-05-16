/**
 * Created by nabokov on 15.05.2017.
 */
import moment from 'moment';

export const requiredValidate = value => !value ? '*Обязательно' : void 0;

export const fioValidation = value => value && new RegExp('^[А-Яа-я]*$', 'i').test(value) ? void 0 : 'Только русские буквы';

export const dobValidation = value => {
    const isValid = moment(value, "DD.MM.YYYY",true).isValid();
    if (value && isValid) {
        if(moment(value, "DD.MM.YYYY").add(18, 'y').toDate() < new Date()){
            return void 0;
        }
        else{
            return 'Вы должны быть старше 18 лет';
        }
    }
    return 'Формат даты - DD.MM.YYYY';
};

export const sexValidation = value => value && new RegExp('^(м|ж)$', 'i').test(value.toLowerCase()) ? void 0 : 'Указать буквой м или ж';

// eslint-disable-next-line
const regExpEmail = new RegExp('^[0-9a-zA-Z-_\$#]+@[0-9a-zA-Z-_\$#]+\.[a-zA-Z]{2,5}', 'i');
export const emailValidate = value => value && regExpEmail.test(value) ? void 0: 'Неверный email';
