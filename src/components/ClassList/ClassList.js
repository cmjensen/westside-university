import React, { Component } from 'react';
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>

      </div>
    )
  }
}