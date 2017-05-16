/**
 * Created by nabokov on 16.05.2017.
 */
import React, { Component } from 'react'

export  default class InputField extends Component {
    get value(){
        return (
            this.refs.currentElement &&
            this.refs.currentElement.value
        )
    }
    render() {
        const { ...props} = this.props;
        return (
            <input
                {...props}
                ref="currentElement"
            />
        )
    }
}