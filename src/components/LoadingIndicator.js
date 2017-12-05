import React, { Component } from 'react'
import { DotLoader } from 'react-spinners';

class LoadingIndicator extends Component {



    render () {


        return (
            <div className="loadingIndicator">
                <DotLoader color="#ffffff" size="80"/>

                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default LoadingIndicator