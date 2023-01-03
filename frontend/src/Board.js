import React from 'react'

import Carlos from './Images/Carlos.jpg'
import Akane from './Images/Akane.jpg'
import Junpei from './Images/Junpei.jpg'

import Q from './Images/Q.jpg'
import Eric from './Images/Eric.jpg'
import Mira from './Images/Mira.jpg'

import Diana from './Images/Diana.jpg'
import Phi from './Images/Phi.jpg'
import Sigma from './Images/Sigma.jpg'

const Board = (props) => {
  return (
    <>
      <section className="hero is-primary">
          <div className="hero-body">
            <p className="title">Aegis</p>
          </div>
      </section>
      <div className="columns is-multiline" style={{ paddingLeft: 13, paddingRight: 13, margin: 0 }}>
        <div className="column is-half">
          <p className="title">Hours Remaining: {props.G.timeLeft}</p>
        </div>
        <div className="column is-half">
          <p className="title">Distance to X-Door: {props.G.distanceLeft}</p>
        </div>

        <div className="column character is-4">
          <p className="title"> Carlos</p>
          <img src={Carlos} />
        </div>
        <div className="column character is-4">
          <p className="title"> Akane</p>
          <img src={Akane} />
        </div>
        <div className="column character is-4">
          <p className="title"> Junpei</p>
          <img src={Junpei} />
        </div>

        <div className="column character is-4">
          <p className="title"> Q</p>
          <img src={Q} />
        </div>
        <div className="column character is-4">
          <p className="title"> Eric</p>
          <img src={Eric} />
        </div>
        <div className="column character is-4">
          <p className="title"> Mira</p>
          <img src={Mira} />
        </div>

        <div className="column character is-4">
          <p className="title"> Diana</p>
          <img src={Diana} />
        </div>
        <div className="column character is-4">
          <p className="title"> Phi</p>
          <img src={Phi} />
        </div>
        <div className="column character is-4">
          <p className="title"> Sigma</p>
          <img src={Sigma} />
        </div>
      </div>
    </>
  )
}

export default Board


