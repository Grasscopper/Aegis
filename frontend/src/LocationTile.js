import React from 'react'

const LocationTile = (props) => {
  let column = "column character is-3 "
  column += props.id

  const handleLocation = (event) => {
    props.setSelectedLocation(props.name)
    props.activateModal(event)
  }

  return (
    <div className={column} onClick={handleLocation}>
      <p className="title has-text-white">{props.name}</p>

      <p className="title has-text-black">HP Risk</p>
      <p className="title has-text-white">{props.healthRisk}</p>

      <p className="title has-text-black">Death Game Risk</p>
      <p className="title has-text-white">{props.deathGameRisk}</p>
    </div>
  )
}

export default LocationTile