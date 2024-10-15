import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (
    <div className='text-white'>
    <div className="card border-2 shadow-blue-950 border-blue-950 w-70 sm:w-96 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 mx-4 sm:mx-6">
    <figure className="px-10 pt-10">
      <img
        src={props.src}
        alt="Shoes"
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{props.heading}</h2>
      <p>{props.description}</p>
      <div className="card-actions">
      <Link to={props.link1} className="text-white rounded-lg px-5 py-3 bg-blue-950 hover:bg-blue-900 hover:shadow-lg transition-shadow duration-200 w-full text-center">
  {props.button1}
</Link>
<Link to={props.link2} className="text-white rounded-lg px-5 py-3 bg-blue-950 hover:bg-blue-900 hover:shadow-lg transition-shadow duration-200 w-full text-center">
  {props.button2}
</Link>

      </div>
    </div>
  </div>
    </div>
  )
}

export default Card