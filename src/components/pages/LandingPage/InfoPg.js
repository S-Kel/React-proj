import {Grid, Cell} from 'react-mdl'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class InfoPg extends Component {
  render() {
    return (
    <Grid className="landing-grid">
        <Cell col={12}>
            <div id="info">
                <div className="get-grid">
                    <img className= "grid-item1" src="/Assets/meta-chart.png"/>
                    <img className= "grid-item2" src="/Assets/pie-Chart.png"/>
                    <img className= "grid-item3" src="/Assets/pie-Chart.png"/>
                    <img className= "grid-item4" src="/Assets/meta-chart.png"/>
                </div>
            </div>
            <div className="find-out-more">
                <button><Link to="/create">Register Interest</Link></button>
            </div>
        </Cell>
    </Grid>
    )
  }
}



