import React, { Component } from 'react';
import MonthlyCalender from './../MonthlyCalender';
import Months from './months.json';

class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = { months: Months
            }
    }

    render() {
        let calenders = this.state.months.map((item,key)=>{
            console.log(item)

            return <MonthlyCalender key={key} month={item.month} days={item.days} date={item.date} />
        })
        return (
            <div>
                {calenders}
            </div>
            // <MonthlyCalender month={this.state.month} days={this.state.days} date={this.state.date} />
        );
    }
}

export default Calender;