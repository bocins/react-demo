import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InputMask from 'react-input-mask';
import Field from './Field';
import InputField from './components/InputField';
import CheckboxField from './components/CheckboxField';
import SelectField from './components/SelectField';
import {isValid, getFieldValue, values} from './selectors';
import {sendDataForm} from './request';
import {
    requiredValidate, fioValidation, dobValidation,
    sexValidation, emailValidate
} from './validate';

import './App.css';


const cars = {
    BMW: [
        <option key="0" value=""></option>,
        <option key="1" value="X5">X5</option>,
        <option key="2" value="X3">X3</option>,
        <option key="3" value="X1">X1</option>
    ],
    Opel: [
        <option key="0" value=""></option>,
        <option key="1" value="Astra">Astra</option>,
    ],
    Honda: [
        <option key="0" value=""></option>,
        <option key="1" value="Accord">Accord</option>,
        <option key="2" value="Civic">Civic</option>,
    ],
};

class App extends Component {

    state = {
        isCar: false,
        carModel: 'BMW',
    };


    handleSubmit = () => {
        debugger;
        this.props.sendDataForm(this.props.values);
    };

    render() {
        console.log("render APP");
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit} action="javascript:void(null);">
                    <Field
                        component={InputField}
                        name="surname"
                        label="Фамилия"
                        validate={[requiredValidate, fioValidation]}
                    />
                    <br/>
                    <Field
                        component={InputField}
                        name="firstName"
                        label="Имя"
                        validate={[requiredValidate, fioValidation]}
                    />
                    <br/>
                    <Field
                        component={InputField}
                        name="patronymic"
                        label="Отчество"
                        validate={[requiredValidate, fioValidation]}
                    />
                    <br/>
                    <Field
                        component={InputField}
                        name="dob"
                        label="Дата рождения"
                        validate={[requiredValidate, dobValidation]}
                    />
                    <br/>
                    <Field
                        component={InputField}
                        name="sex"
                        label="Пол"
                        validate={[requiredValidate, sexValidation]}
                    />
                    <br/>
                    <Field
                        component={InputMask}
                        name="passport"
                        label="Серия и номер паспорта"
                        mask="99 99 999999"
                        validate={[requiredValidate]}
                    />
                    <br/>
                    <Field
                        component={InputField}
                        name="email"
                        label="Электронная почта"
                        validate={[requiredValidate, emailValidate]}
                    />
                    <br/>
                    <Field
                        component={CheckboxField}
                        name="isCar"
                        label="Есть автомобиль"
                    />
                    <br/>
                    {this.props.isCarChecked ?
                        <div>
                            <Field
                                component={SelectField}
                                name="carModel"
                                label="Марка автомобиля"
                            >
                                <option value=""></option>
                                <option value="BMW">BMW</option>
                                <option value="Opel">Opel</option>
                                <option value="Honda">Honda</option>
                            </Field>
                            <br/>
                            <Field
                                component={SelectField}
                                name="carType"
                                label="Модель автомобиля"
                            >
                                {this.props.carModel? cars[this.props.carModel].map((item) => item): null}
                            </Field>
                        </div>
                        : null}
                    <br/>
                    <input
                        disabled={!this.props.isValid}
                        type="submit"
                        value="Отправить"
                    />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isValid: isValid(state),
        isCarChecked: getFieldValue(state,"isCar"),
        carModel: getFieldValue(state,"carModel"),
        values: values(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sendDataForm: bindActionCreators(sendDataForm, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

