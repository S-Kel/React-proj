import React, { Component } from 'react'
import { api } from '../api/init'

export default class Welcome extends Component {

  constructor(props) {
    super(props)

    this.state = {
      response: ''
    }
  }

  fetchHomepage = async () => {
    try {
      const response = await api.get("/")
      console.log(response.data)
      this.setState({ response: response.data })
    } catch (error) {
      console.error("problem retrieving homepage info", error)
    }
  }

  componentDidMount = () => {
    this.fetchHomepage()
  }

  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>{this.state.response}</p>
      </div>
    )
  }
}


