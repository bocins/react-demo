/**
 * Created by nabokov on 15.05.2017.
 */
import React, {Component, createElement} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions/actionsField'


const Field = class Field extends Component {

    handleChange = (event) => {
        const {editField, name, onChange} = this.props;
        editField(name, this.refs.currentElement.value);
        if(onChange){
            onChange.call(null, event, this.refs.currentElement)
        }
    };

    componentWillMount() {
        const {registerField, name, validate} = this.props;
        registerField(name,validate);
    };

    render() {
        const {
            component, textError, label,
            //исключаем свойства что бы не передавались созданым элементам
            registerField,
            editField,
            validate,
            value,
            ...props
        } = this.props;

        const labelElement = label ? <div> {label} </div> : null;
        const validElement = textError ? <div className="error">{textError}</div> : null;
        const mainElement = createElement(component,
            {
                ...props,
                ref: 'currentElement',
                onChange: this.handleChange
            });
        return (
            <div>
                {labelElement}
                {mainElement}
                {validElement}
            </div>
        )
    }
};

Field.defaultProps = {
    label: "",
    value: void 0,
    textError: void 0,
    onChange: null,
};

Field.PropTypes = {
    component: PropTypes.element.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    validate: PropTypes.arrayOf(PropTypes.func),
    props: PropTypes.object,
    onChange: PropTypes.func,
};

function mapStateToProps(state, props) {
    const field = state.form[props.name] || null;
    return {
        // eslint-disable-next-line
        textError: field && field.textError || void 0,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerField: bindActionCreators(actions.registerField, dispatch),
        editField: bindActionCreators(actions.editField, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Field);