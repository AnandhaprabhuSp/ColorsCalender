import React, { Component } from 'react';
import './events.css';

class DisplayEventList extends Component {
    render() {
        console.log(this.props.events);
        let { events, month } = this.props;
        let evtsLists = <div className='name inline'>No remainder so far!</div>;
        evtsLists = events.length ? events.map((item, index) => {
            return (<div key={index}>
                <h6 className='date inline'>{item.date} {month}</h6>
                <h6 className='name inline'>{item.name}</h6>
                <h6 className='from inline'>{item.from}</h6>
                <h6 className='to inline'>{item.to}</h6>
            </div>)
        }) : evtsLists;
        return (
            <div className="events-container">
                <h4>{month} Remainders!!!</h4>
                {evtsLists}
            </div>
        );
    }
}

export default DisplayEventList;