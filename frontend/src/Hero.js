import React, { useState, useEffect } from 'react'
import BoardGame from './BoardGame'

const Hero = (props) => {
  const [hero, setHero] = useState({
    name: 'Hero',
    health: 50
  })

  useEffect(() => {
    fetch('http://localhost:8000/')
    .then((response) => {
      return response.json()
    })
    .then((body) => {
      setHero(body[0].fields)
    })
    .catch((error) => {
      console.error(error)
    })
  }, [])

  return (
    <section className="hero is-primary">
      <div className="hero-body">
          <p className="title">
            {hero.name}
          </p>

          <p className="subtitle">
            {hero.health} HP
          </p>
      </div>

      <div className="container">
          <div className="notification is-primary">
            <BoardGame />
          </div>
      </div>
    </section>
  )
}

export default Hero


