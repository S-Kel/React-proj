import React, { Component } from 'react';
import { Card, Button, Icon, Image, Dropdown, Input  } from 'semantic-ui-react'

class AdminDashboard extends Component {
    state = { data:[
        {id: 1, name: "test1", organisation: "company1", createdAt:"1/2/19", shortlisted: true},
        {id: 2, name: "test2", organisation: "company2", createdAt:"2/2/19", shortlisted: false}
    ] }
    
    render() { 
        //  data = {this.state.dat
        const buildCards = this.state.data.map((Data) =>
        
        <React.Fragment>

        <Card.Group centered>
            <Card color="red" fluid > 
            <Card.Content color="red"  >
                    <input  type="hidden" value={Data.id}></input>
                    <Card.Header key={Data.name} >{Data.name}</Card.Header>
                    <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
                    <Card.Description key={Data.organisation}>{Data.organisation}</Card.Description>
                    <Button animated inverted color="red">
                    <Button.Content visible>VIEW</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                    </Button>
                    
                    <div>
                    {Data.shortlisted ? (<Image floated='right' size='mini' src='/Assets/WBGS-logo.png' />):
                    (<Image floated='right' size='mini' src='/Assets/pie-Chart.png' />)}
                    </div>
                </Card.Content>
            </Card>
        </Card.Group>
        </React.Fragment>);

        return (  
            <React.Fragment>
            <div className="cardContainer">
             {buildCards}
             </div>

            </React.Fragment>
        );
    }
}
 
export default AdminDashboard;