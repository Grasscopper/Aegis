import React from 'react'

const LocationModal = (props) => {
  return (
    <div className={props.modal}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Destination</p>
        </header>
        <section className="modal-card-body">
          <p>Travel to {props.selectedLocation}?</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Confirm</button>
          <button className="button" onClick={props.deactivateModal}>Cancel</button>
        </footer>
      </div>
    </div>
  )
}

export default LocationModal