import React, { Component } from 'react';
import SideBar from '../../components/SideBar';
import Contacts from '../../components/Contacts';

class Client extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <Contacts />
            </div>
        )
    }
}

export default Client;