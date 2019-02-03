import React, { Component } from 'react';
import { Paginations, Card, Button, Icon, Image, Dropdown, Input  } from 'semantic-ui-react'
import Pagination from './Pagination';
// import {Pagination, Icon} from 'semantic-ui-react';
import fakeEvents from './FakeEventData';

class AdminDashboard extends Component {
    state = {
    events: [],
    currentEvents: [],
    activePage: null,
    pages: null,
    perPage: null,
    offset: null,
    startCount: 0,
    data:[
        {id: 1, name: "Mitchell Heiser", organisation: "company1", createdAt:"1/2/19", shortlisted: true},
        {id: 2, name: "test2", organisation: "company2", createdAt:"2/2/19", shortlisted: false}
    ]
  };

  componentWillMount() {
    const events = fakeEvents; 
    if(!events.length || events.length===0) return null;
    console.log('Events.length', events.length)
    const perPage = 45;
    const activePage = 1;
    const pages = Math.ceil(events.length/perPage);
    const offset = 0;// (currentPage - 1) * perPage;
    const currentEvents = events.slice(offset,(offset + perPage));

    this.setState({events, activePage, currentEvents, perPage, pages, offset});

    // this.setState({ events });
      console.log('componentWillMount loaded pages', pages);
  }
 
  handlePaginationChange = (evt,{ activePage }) =>{
    const {events, pages, perPage, startCount} = this.state; 
    let currentPage = Number(activePage) || 1;
    let offset = (currentPage - 1) * perPage || 0;     
    const currentEvents = events.slice(offset, (offset + perPage));

    this.setState({
      activePage: currentPage,
      currentEvents,
      pages,
      offset: offset
    });
   
    // console.log("page Offset", activePage);
    console.log("evt,{activePage}", activePage);
    console.log('currentPage | offset', currentPage, offset)
    console.log('this.state', this.state)
  }
  render() { 
    console.log('Render function loaded');
    const {currentEvents, activePage,pages} = this.state;    

    const buildCards = currentEvents.map((Data, index) =>
        <React.Fragment key={index} >
            <Card.Group centered >
                <Card color="red" fluid > 
                    <Card.Content color="red"  >
                        <input  type="hidden" value={Data.id}></input>
                            <Card.Header key={index} >{Data['title']}</Card.Header>
                            <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
                            <Card.Description key={Data.organisation}>{Data['body']}</Card.Description>
                            <Button animated inverted color="red">
                            <Button.Content visible>VIEW</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right' />
                            </Button.Content>
                            </Button>
                            <div>
                                {Data.shortlisted ? 
                                    (<Image floated='right' size='mini' src='/Assets/WBGS-logo.png' />):
                                    (<Image floated='right' size='mini' src='/Assets/WBGS-logo dulled.png' />)
                                }
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>                
        </React.Fragment>);

    return (
      <React.Fragment>
        <div className="filter">
          <Dropdown
            color="red"
            text="Filter By"
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="tags" content="Filter by tag" />
              <Dropdown.Item>Shortlisted</Dropdown.Item>
              <Dropdown.Item>See All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="cardContainer">{buildCards}</div>
        {/* {pages >=0 && <div style={{color: 'red', marginTop: 10}}>
            <Pagination
              pointing               
              activePage = {currentPage}
              boundaryRange={1}
              ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
              firstItem={{ content: <Icon name='angle double left' />, icon: true }}
              lastItem={{ content: <Icon name='angle double right' />, icon: true }}
              prevItem={{ content: <Icon name='angle left' />, icon: true }}
              nextItem={{ content: <Icon name='angle right' />, icon: true }}
              onPageChange={this.handlePaginationChange}
              totalPages={pages}
            />
        </div>} */}

        {pages > 1 && (
          <Pagination
            currentPage={activePage}
            currentEvents={currentEvents}
            pages={pages}
            onPageChange={this.handlePaginationChange}
            onClick={(evt)=> {
              this.setState({ activePage: Number(evt.target.innerText)})
              console.log('You have clicked Me!', evt.target.innerText)
            }
            }
          />
        )}
      </React.Fragment>
    );
  }
}
 
export default AdminDashboard;