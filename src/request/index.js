/**
 * Created by nabokov on 16.05.2017.
 */

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export function sendDataForm(values) {
    return (dispatch) => {
        const request = (data) => {
            return {
                type: "@@SEND_FORM",
                payload: data
            }
        };
        const receive = (data) => {
            return {
                type: "@@SUCCESS_SEND_FORM",
                payload: data
            }
        };
        const fail = (data) => {
            return {
                type: "@@FAIL_SEND_FORM",
                payload: data
            }
        };
        dispatch(request(values));
        return sleep(1000)
            .then(() => {
                dispatch(receive({}));
            })
            .catch((error) => {
                dispatch(fail(error));
            });
    }
}