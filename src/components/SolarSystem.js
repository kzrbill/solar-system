
import React, { Component } from 'react'
import request from 'superagent'
import LoadingIndicator from './LoadingIndicator'
import Planet from './Planet'
import ErrorMessage from './ErrorMessage'
import Request from '../request/Request'





class SolarSystem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            requestStatus: Request.STATUS_LOADING,
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
                    requestStatus: Request.STATUS_ERROR,
                    requestStatusMessage: err.message
                })
            }

            self.setState({
                planets: response.body.planets,
                requestStatus: Request.STATUS_SUCCESS,
                requestMessage: 'Planets loaded'
            })
        }
    }

    render() {
        let content = {}

        content[Request.STATUS_LOADING] = <LoadingIndicator message={this.state.requestMessage} />
        content[Request.STATUS_ERROR] = <ErrorMessage message={this.state.requestMessage} />
        content[Request.STATUS_SUCCESS] = this._renderPlanets()

        return content[this.state.requestStatus]
    }

    _renderPlanets() {
        const planets = this.state.planets.map(planet => {
            return (
                <Planet planet={planet} />
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
