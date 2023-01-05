import React from 'react'

// import Carlos from './Images/Carlos.jpg'
// import Akane from './Images/Akane.jpg'
// import Junpei from './Images/Junpei.jpg'
//
// import Q from './Images/Q.jpg'
// import Eric from './Images/Eric.jpg'
// import Mira from './Images/Mira.jpg'
//
// import Diana from './Images/Diana.jpg'
// import Phi from './Images/Phi.jpg'
// import Sigma from './Images/Sigma.jpg'

import Kaede from './Images/Kaede.jpg'
import LocationTile from './LocationTile'

const Board = (props) => {
  let locations = props.G.locations.map((location) => {
    return (
      <LocationTile
        key={location.id}
        id={location.id}
        name={location.name}
        healthRisk={location.healthRisk}
        deathGameRisk={location.deathGameRisk}
      />
    )
  })

  return (
    <div>
      <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Killing School Trip</p>
          </div>
      </section>
      <div className="columns is-multiline" style={{ margin: 0 }}>
        <div className="column character kaede is-3">
          <p className="title has-text-white">{props.G.player.name}</p>
          <progress className="progress is-success" value={props.G.player.health} max={props.G.player.maxHealth}>{props.G.player.health}</progress>
          <img src={Kaede} />
        </div>
        {locations}

      </div>
    </div>
  )
}

export default Board


