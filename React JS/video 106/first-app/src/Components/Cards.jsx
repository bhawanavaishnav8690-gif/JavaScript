import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='Card'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmzguYJAc02q2gKJPRClL9LS38SQCOnkcEV3uZK9ksz37fZkHVoEYcJw&s=10" width={300} style={{border: "2px solid black"}} alt="" />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Cards
