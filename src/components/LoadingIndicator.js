import React, { Component } from 'react'
import Loader from 'halogen/MoonLoader'

class LoadingIndicator extends Component {
    render () {
        return (
            <div className="loadingIndicator">
                <Loader />
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default LoadingIndicator