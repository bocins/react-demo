/**
 * Created by nabokov on 16.05.2017.
 */
import React, { Component } from 'react'

export  default class CheckboxField extends Component {
    get value(){
        return (
            this.refs.currentElement &&
            this.refs.currentElement.checked
        )
    }
    render() {
        const { ...props} = this.props;
        return (
            <input
                {...props}
                ref="currentElement"
                type="checkbox"
            />
        )
    }
}