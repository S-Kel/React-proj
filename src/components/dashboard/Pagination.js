import React, { Component } from 'react'
import { push } from 'final-form-arrays';
import {Pagination, Icon} from 'semantic-ui-react';
// const events = [];
// constructor(props){
// super(props)
// }
const Paginate = (props)=> {
 console.log('Pagination function loaded');
  const { onClick, currentPage, pages, onPageChange } = props;
 // const { activePage } = this.state
 // const page = 1;
 // const perPage = 5;
 // const pages = Math.ceil(events.length/perPage)
 // const currentPage = page;
 // const startOffset = (currentPage - 1) * perPage;
 // let startCount = 0;
//  console.log('Current Events >', currentEvents)
    return (
     <div style={{color: 'red', marginTop: 10}}>
        {
          // currentEvents.map((event, index) => 
          // <ul key={index}>
          //   <li>
          //     <h3>{event["title"]}</h3>
          //     <h6>{event["body"]}</h6>
          //   </li>
          // </ul>

          // if (index >= startOffset && startCount < perPage) {
          //   startCount++;
          //   return (
          //     <ul key={index}>
          //       <li>
          //         <h3>{event["title"]}</h3>
          //         <h6>{event["body"]}</h6>
          //       </li>
          //     </ul>
          //   );
          // }else return null
        // )
        }
        {/* 
         state = { activePage: 1 }
         handleInputChange = (e, { value }) => this.setState({ activePage: value })
         handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

         <Pagination 
           className='ccc 
           pull-right' size='medium' 
           maxButtons={10} 
           first last 
           next 
           prev boundaryLinks
           items={pages} 
           activePage={currentPage} 
           onSelect={changePage}
         /> 
        */}
         <Pagination
           // defaultActivePage={page}
           pointing
           // secondary
            activePage={currentPage}
           boundaryRange={1}
           siblingRange= {1}
           ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
           firstItem={{ content: <Icon name='angle double left' />, icon: true }}
           lastItem={{ content: <Icon name='angle double right' />, icon: true }}
           prevItem={{ content: <Icon name='angle left' />, icon: true }}
           nextItem={{ content: <Icon name='angle right' />, icon: true }}
           onPageChange={onPageChange}
           totalPages={pages}
          onClick={onClick}
         />
      </div>
    );
}

const changePage=(page)=>{
 // this.props.dispatch(push("/?page=" + page));
 // this.props.history.push('/?page=' + page );
 page ++;
}

// export the connected class
const mapStateToProps= state =>({
 events: state.events.list,
 page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
})
export default Paginate
// export default connect(mapStateToProps,{})(Pagination);
