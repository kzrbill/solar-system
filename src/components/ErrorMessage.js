
import React, { Component } from 'react'

class ErrorMessage extends Component {
    render () {
        return (
            <div className="errorResponse">
                {this.props.message}
            </div>
        )
    }
}

export default ErrorMessage