import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Home() {
  return (
    <div style={{backgroundColor:"red"}}> 
    <div className='container-fluid'>
    <div className='container home'>
        <div className='col-md-12'>
            <h2>Assignment of Deven Infotech</h2>
            <NavLink to="/list" className='btn btn-warning px-3 my-5' >Employee List</NavLink>
        </div>
    </div>
    </div>
    </div>
  )
}
