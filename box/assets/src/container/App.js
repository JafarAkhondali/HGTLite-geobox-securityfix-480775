import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component{
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <p><Link to="/about">About 调转1</Link></p>
                <p><Link to="/topics">Topics 调转2</Link></p>
                {this.props.children}
            </div>
        )
    }
}

export default App