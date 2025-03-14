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
            <p>Numbers of Cards: < TermLength/></p>
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
