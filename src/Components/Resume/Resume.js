
import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div className='resume'>
        <a href='' target='_blank'><img src={require('./simple.png')} alt='resume'  /></a>
       
      </div>
    )
  }
}

export default Resume