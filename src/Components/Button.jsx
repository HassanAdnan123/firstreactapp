import React, { Component } from 'react';

class Button extends React.Component{
    render()
    {
        return (
            <button> {this.props.string} </button>
        )
    }
}
export default Button;