import React, { Component } from 'react';

class InputC extends React.Component
{
    render()
    {
        return(
            <input placeholder= {this.props.value}/>
        )
    }
}
export default InputC;