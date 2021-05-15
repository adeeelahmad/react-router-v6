import React from 'react'
import{Link, Outlet} from 'react-router-dom'

export const About = () => {
    return (
        <div>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        
      </nav>

      <Outlet />
    </div>
    )
}
