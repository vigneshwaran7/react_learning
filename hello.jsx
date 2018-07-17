import React, { Component } from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}
ReactDOM.render(<Hello/>, document.getElementById('App'));
export default Hello;