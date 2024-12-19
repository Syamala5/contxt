import React from 'react'
import './App.css'
import Family from './components/Family'

const App = () => {
  return (
    <div>
     <Family /> 
      <div className="bdy"> 
        <div className="dev">
          <div classsName="innersquare"></div>
          <p> This is contxt api branch</p>
        </div>
      </div>
    </div>
  )
}

export default App
