import React, { Component } from 'react';
import Container from '../../components/SideBar';
import Calendar from '../../components/Calendar';
import moment from 'moment';

class Main extends Component {
    render() {
        return (
            <div>
                <Container />
                <Calendar selected={ moment().startOf("day") } />
            </div>
        )
    }
}

export default Main;