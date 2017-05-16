const initialState = {};

export default function formReducer(state = initialState, action) {

    function registerField(state, action) {
        if (action.payload.name) {
            if (action.payload.validate) {
                state[action.payload.name] = {
                    validate: action.payload.validate,
                    textError: validate(action.payload.validate, action.payload.value)
                };
            } else {
                state[action.payload.name] = {};
            }
        }
        return {...state}
    }

    function editField(state, action) {
        if (action.payload.name) {
            const validates = state[action.payload.name].validate;
            const validResult = validate(validates, action.payload.value);
            if (validResult) {
                state[action.payload.name]["textError"] = validate(validates, action.payload.value);
            } else {
                delete state[action.payload.name]["textError"];
            }
            state[action.payload.name]["value"] = action.payload.value;
        }
        return {...state}
    }

    switch (action.type) {
        case "@@EDIT_FIELD":
            return editField(state, action);
        case "@@REGISTER_FIELD":
            return registerField(state, action);
        default:
            return state
    }
}

function validate(validates, value) {
    let textError = "";
    if (Array.isArray(validates)) {
        for (let i = 0, j = validates.length; i < j; i++) {
            textError = validates[i](value);
            if (textError) {
                break;
            }
        }
    }
    return textError || void 0;
}