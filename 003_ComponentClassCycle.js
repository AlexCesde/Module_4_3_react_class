import React, { Component } from 'react';

class ComponentClassCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello",
            color: props.color
        };
    };

    render() {
        return (
            <>
                <h1 style={this.state.color}>{this.state.title}</h1>
            </>
        );
    };
};

export default ComponentClassCycle;