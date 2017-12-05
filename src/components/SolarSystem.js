
import React, { Component } from 'react'
import request from 'superagent'

class LoadingIndicator extends Component {
    render () {
        return (
            <div className="loading">
                Loading
            </div>
        )
    }
}

class ErrorResponse extends Component {
    render () {
        return (
            <div className="Error response">
                Loading
            </div>
        )
    }
}


const REQUEST_STATUS_LOADING = 'REQUEST_STATUS_LOADING'
const REQUEST_STATUS_SUCCESS = 'REQUEST_STATUS_SUCCESS'
const REQUEST_STATUS_ERROR = 'REQUEST_STATUS_ERROR'


class SolarSystem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requestStatus: REQUEST_STATUS_LOADING,
            requestMessage: 'Planets loading...',
            planets: []
        }
    }

    componentWillMount() {
        request
            .get('http://solarsystemapi.azurewebsites.net/api/planets')
            .end(onFetchedPlanets)

        const self = this
        function onFetchedPlanets(err, response) {

            if (err) {
                return self.setState({
                    planets: response.body.planets,
                    requestStatus: REQUEST_STATUS_ERROR,
                    requestStatusMessage: err.message
                })
            }

            self.setState({
                planets: response.body.planets,
                requestStatus: REQUEST_STATUS_SUCCESS,
                requestMessage: 'Planets loaded'
            })
        }
    }

    render() {


        let content = {}
        content[REQUEST_STATUS_LOADING] = (<LoadingIndicator message={this.state.requestMessage} />)
        content[REQUEST_STATUS_ERROR] = (<ErrorResponse message={this.state.requestMessage} />)
        content[REQUEST_STATUS_SUCCESS] = (this._renderPlanets())


        let contentToRender = content[this.state.requestStatus]


        console.log(contentToRender, 'contentToRender')

        return contentToRender
    }

    _renderPlanets() {
        const planets = this.state.planets.map(planet => {

            const className = `planet ${planet.name}`

            return (
                <li className={className} key={planet.name} >
                    <h2>{planet.name}</h2>
                </li>
            )
        })

        return (
            <ol className="solarSystem">
                {planets}
            </ol>
        )
    }
}

export default SolarSystem
