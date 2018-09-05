
import React, { Component } from 'react'
import './Resume.css'

class Resume extends Component {
  render () {
    return (
      <div className='resume'>
        <a href='https://drive.google.com/file/d/1ED1a_ABhbuz_lmKqrjEwiiQ2Mduw-06a/view?usp=sharing' target='_blank'><img src={require('./RESUMELMKIII-me.jpg')} alt='resume'  /></a>
       
      </div>
    )
  }
}

export default Resume