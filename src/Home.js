import React from 'react'
import{Link} from 'react-router-dom'

export const Home = () => {
    return (
        <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link>
      </nav>
      <h1>goto About for products and features of react router v6</h1>
    </div>
    )
}
