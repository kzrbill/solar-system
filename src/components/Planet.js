import React, { Component } from 'react'

class PlanetStats extends Component {
    render() {
        const stats = this.props.stats.map(stat => {
            return <li><strong>{stat.name}</strong> {stat.value}</li>
        })

        return (
            <ul className="planetStats">
                <li>{stats}</li>
            </ul>
        )
    }
}

class Planet extends Component {
    render () {

        const planet = this.props.planet
        const className = `planet ${planet.name}`

        return (
            <li className={className} key={planet.name} >
                <div className='thumb'><img src={planet.imageUrl} alt={planet.name} /></div>
                <h2>{planet.name}</h2>
                <PlanetStats stats={planet.stats} />
            </li>
        )
    }
}

export default Planet