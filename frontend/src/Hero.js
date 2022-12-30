import React, { useState, useEffect } from 'react'

const Hero = (props) => {
  const [hero, setHero] = useState({
    name: '',
    health: 0
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
    <div>
      <h1>Name: {hero.name}</h1>
      <p>Health: {hero.health}</p>
    </div>
  )
}

export default Hero


