import React, { Component } from 'react'
import Settings from './img/Settings.gif'

export class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <img src={Settings} alt="loading" />
        </div>
      
    )
  }
}

export default Spinner