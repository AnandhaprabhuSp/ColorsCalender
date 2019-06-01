import React, { Component } from 'react';
import Modal from 'react-modal';
import './calender.css';
import DisplayEventList from './../DisplayEventList';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class MonthlyCalender extends Component {
    constructor(props) {
        super(props);
        let { month, days, date } = this.props;
        this.event = {
            name: null,
            date: null,
            timeFrom: null,
            timeTo: null
        };
        let tempEvents = [{
            "name": "Interview",
            "date": "1",
            "from": "01:00",
            "to": "01:00"
        }, {
            "name": "Interview2",
            "date": "1",
            "from": "01:00",
            "to": "01:00"
          }];
        this.state = {
            month: month,
            days: days,
            date: date,
            modalIsOpen: false,
            eventsList: []//tempEvents
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.createEvent = this.createEvent.bind(this);
        this.pushEvent = this.pushEvent.bind(this);
    }

    closeModal() {

        this.setState({ modalIsOpen: false });
    }
    openModal(date) {
        this.setState({
            modalIsOpen: true,

        });
        this.event = {
            date: date
        }
    }
    createEvent(event) {
        console.log(event.target.textContent);
        if (event.target.textContent)
            this.openModal(event.target.textContent);
    }
    pushEvent() {
        let eventDetails = { name: this.event.name.value, date: this.event.date, from: this.event.timeFrom.value, to: this.event.timeTo.value };
        if(eventDetails.name !== '' && eventDetails.date !== '' && eventDetails.from !== '' && eventDetails.to !== ''){
            this.setState({
                eventsList: this.state.eventsList.concat(eventDetails)
            });
        }
        this.closeModal();
    }
    componentDidMount() {
        Modal.setAppElement('body');
    }


    render() {
        let { month, days, date } = this.state;
        let daysList = days.map((day, index) => <div className="each-day" key={index}>{day}</div>);
        let datesList = date.map((date, index) => {
            let dateClass = date.enabled ? "each-date" : "each-date disable";
            let title = date.enabled ? "Click to create event" : "";
            return <div className={dateClass} key={index} title={title} onClick={this.createEvent}>{date.date}</div>
        });
        return (
            <div className="calender-container" id="App">
                <h1>{month}</h1>
                <div className="days-container">{daysList}</div>
                <div className="date-container">{datesList}</div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}>
                    <h2>Event</h2>
                    <h3>Date: {this.event.date}-June-2019</h3>
                    <h5>Event Name:<input className="inputs" type="text" name="evt-name" ref={value => this.event.name = value} /></h5>
                    <h5>Time from:<input type="time" name="evt-time" ref={value => this.event.timeFrom = value} /></h5>
                    <h5>Time to:<input type="time" name="evt-time" ref={value => this.event.timeTo = value} /></h5>
                    <button onClick={this.pushEvent}>Remind Me!</button>
                </Modal>
                <DisplayEventList events={this.state.eventsList} month={this.state.month} />
            </div>
        );
    }
}

export default MonthlyCalender;