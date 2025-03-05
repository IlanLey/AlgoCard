import React from 'react'
import './App.css'
import IndexCard from './IndexCard'

function App() {

  return (
    <>
      <header>
          <section>
            <h1>Data Structures & Algorithms</h1>
            <h3>How good is your data structures and algorithms knowledge?</h3>
            <p>Numbers of Cards: 10</p>
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
