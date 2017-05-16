/**
 * Created by nabokov on 16.05.2017.
 */
const initialState = {
    fetching: false,
};

export default function pageReducer(state = initialState, action) {

    function sendForm(state, action) {
        return {...state, fetching: true}
    }

    function successSendForm(state, action) {
        return {...state, fetching: false, message:'Данные успешно отправленны'}
    }

    function failSendForm(state, action) {
        return {...state , fetching: false, error:'Ошибка при отправке' + action.payload}
    }

    switch (action.type) {
        case "@@SEND_FORM":
            return sendForm(state, action);
        case "@@SUCCESS_SEND_FORM":
            return successSendForm(state, action);
        case "@@FAIL_SEND_FORM":
            return failSendForm(state, action);
        default:
            return state
    }
}