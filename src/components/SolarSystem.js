
import React, { Component } from 'react'
import { CardStack, Card } from 'react-cardstack'
import request from 'superagent'

class SolarSystem extends Component {
    componentWillMount() {

        request
            .get('http://solarsystemapi.azurewebsites.net/api/planets')
            .end(onFetchedPlanets)

        function onFetchedPlanets(err, planets) {
            console.log(planets, 'planets')
        }
    }

    render() {
        const solarStack = this._renderSolarStack()
        return (
            <div className="solarSystem">
                {solarStack}
            </div>
        )
    }

    _renderSolarStack() {
        return (
            <CardStack
                height={600}
                width={800}
                background='#f8f8f8'
                hoverOffset={25}>

                <Card background='#CCCCCC'>
                    <h1>Mercury</h1>
                </Card>

                <Card background='#DDDDDD'>
                    <h1>Venus</h1>
                </Card>

                <Card background='#EEEEEE'>
                    <h1>Earth</h1>
                </Card>


            </CardStack>
        )
    }
}

export default SolarSystem
