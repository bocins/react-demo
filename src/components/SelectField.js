/**
 * Created by nabokov on 16.05.2017.
 */
import React, { Component } from 'react'

export default class SelectField extends Component {
    get value(){
        return (
            this.refs.currentElement &&
            this.refs.currentElement.options[this.refs.currentElement.selectedIndex].value
        )
    }
    render() {
        const { ...props} = this.props;
        return (
            <select
                {...props}
                ref="currentElement"
            />
        )
    }
}