import React, { Component } from 'react';
import MonthlyCalender from './../MonthlyCalender';

class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: 'JUNE 2019',
            days: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
            date: [{
                id: 1,
                date: null,
                enabled: false
            },
            {
                id: 2,
                date: null,
                enabled: false
            },
            {
                id: 3,
                date: null,
                enabled: false
            },
            {
                id: 4,
                date: null,
                enabled: false
            },
            {
                id: 5,
                date: null,
                enabled: false
            }, {
                id: 6,
                date: null,
                enabled: false
            },
            {
                id: 7,
                date: 1,
                enabled: true,
            },
            {
                id: 8,
                date: 2,
                enabled: true,
            },
            {
                id: 9,
                date: 3,
                enabled: true,
            },
            {
                id: 10,
                date: 4,
                enabled: true,
            },
            {
                id: 11,
                date: 5,
                enabled: true,
            },
            {
                id: 12,
                date: 6,
                enabled: true,
            },
            {
                id: 13,
                date: 7,
                enabled: true,
            }, {
                id: 14,
                date: 8,
                enabled: true,
            },
            {
                id: 15,
                date: 9,
                enabled: true,
            },
            {
                id: 16,
                date: 10,
                enabled: true,
            }, {
                id: 17,
                date: 11,
                enabled: true,
            },
            {
                id: 18,
                date: 12,
                enabled: true,
            },
            {
                id: 19,
                date: 13,
                enabled: true,
            }, {
                id: 20,
                date: 14,
                enabled: true,
            },
            {
                id: 21,
                date: 15,
                enabled: true,
            },
            {
                id: 22,
                date: 16,
                enabled: true,
            }, {
                id: 23,
                date: 17,
                enabled: true,
            },
            {
                id: 24,
                date: 18,
                enabled: true,
            },
            {
                id: 25,
                date: 19,
                enabled: true,



            }, {
                id: 26,
                date: 20,
                enabled: true,



            },
            {
                id: 27,
                date: 21,
                enabled: true,



            },
            {
                id: 28,
                date: 22,
                enabled: true,



            }, {
                id: 29,
                date: 23,
                enabled: true,



            },
            {
                id: 30,
                date: 24,
                enabled: true,



            },
            {
                id: 31,
                date: 25,
                enabled: true,



            }, {
                id: 32,
                date: 26,
                enabled: true,



            },
            {
                id: 33,
                date: 27,
                enabled: true,



            },
            {
                id: 34,
                date: 28,
                enabled: true,



            }, {
                id: 35,
                date: 29,
                enabled: true,



            },
            {
                id: 36,
                date: 30,
                enabled: true,



            }, {
                id: 1,
                date: null,
                enabled: false
            },
            {
                id: 2,
                date: null,
                enabled: false
            },
            {
                id: 3,
                date: null,
                enabled: false
            },
            {
                id: 4,
                date: null,
                enabled: false
            },
            {
                id: 5,
                date: null,
                enabled: false
            }, {
                id: 6,
                date: null,
                enabled: false
            }]

        }
    }

    render() {
        return (
            <MonthlyCalender month={this.state.month} days={this.state.days} date={this.state.date} />
        );
    }
}

export default Calender;