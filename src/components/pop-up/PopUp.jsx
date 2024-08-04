import React from 'react'
import "./PopUp.scss"

const PopUp = ({isOpen,onClose,onConfirm}) => {
    if (!isOpen) return null;
  return (
    <div className='Popup'>
      <div className="BoxContainer">
        <a href="" onClick={onClose} className='Cross'><img src="cross.png" alt="" /></a>
        <div className='ContentContainer'>
            <div>
              <img src="resume.png" alt="" />
              <h2>Sahil Batgeri Resume</h2>
            </div>
            <p>This file contains my resume in (.pdf) format</p>
        </div>
        <div className="Buttons">
          <a href="Sahil Resume 1.pdf" download onClick={onConfirm}><button> <img src="download.png" alt="" /><p>Download Resume</p> </button></a>
          <a href="" onClick={onClose} ><button ><p>Cancel</p></button></a>
        </div>
      </div>
    </div>
  )
}

export default PopUp