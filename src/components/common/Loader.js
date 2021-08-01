import React, { Component } from 'react'

class Loader extends Component {
    
    render() {
        console.log("loader called");
        return (
            <div>
                <img src="/assets/img/Winter.gif" alt="loader" />
            </div>
        )
    }
}

export default Loader;
