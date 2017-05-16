/**
 * Created by nabokov on 15.05.2017.
 */
/**
 * Функция инициализации поля формы в Redux хранилище
 * @param {string} name - имя поля(обязательный параметр).
 * @param {func[]} validate - массив функций с проверкой на валидацию.
 * @param {string} value - значение поля по умолчанию, если ни чего не задано то пустая строка.
 */
export function registerField(name, validate, value = "") {
    return {
        type: "@@REGISTER_FIELD",
        payload: {name, validate, value}
    }
}

export function editField(name, value) {
    return {
        type: "@@EDIT_FIELD",
        payload: {name, value}
    }
}