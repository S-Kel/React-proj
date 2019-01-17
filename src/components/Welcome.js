import React, { Component } from 'react'

export default class Welcome extends Component {

fetchHomepage = async () => {
    try {
        const response = await api.get("/")
        return response.data
    } catch(error){
        console.error("problem retrieving homepage info", error)
    }
}
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>{this.fetch.fetchHomepage}</p>
      </div>
    )
  }
}
