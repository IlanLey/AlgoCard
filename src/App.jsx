import React from 'react'
import './App.css'
import IndexCard from './IndexCard'
import { TermLength } from './IndexCard'

function App() {

  return (
    <>
      <header>
          <section>
            <h1>Computer Science Terms</h1>
            <h3>How good is your computer science knowledge?</h3>
          </section>
          <section className="display-container">
            <p>Numbers of Cards: </p>
            < TermLength/> 
          </section>
      </header>
      <div>
        <section className='container'>
          <IndexCard />
        </section>
      </div>
    </>
  )
}

export default App
