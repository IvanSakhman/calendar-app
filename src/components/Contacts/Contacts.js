import React, { Component } from 'react';
import styles from './Contacts.scss';

class Contacts extends Component {
    state = {
        clients: [
            {
                letter: "E",
                list: ["Eddie Albert", "Eddy Arnold"]
            },
            {
                letter: "N",
                list: ["Neil Armstrong", "Nils Asther"]
            },
            {
                letter: "S",
                list:["Stella Adler", "Steve Allens"]
            }
        ]
    };

    renderClients = letterObj => (
        <div>
            <div className={styles.letter}>{letterObj.letter}</div>
            {letterObj.list.map(el => <p className={styles.name}>{el}</p>)}
        </div>
    );

    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>My Clients</h2>
                {this.state.clients.map(letterObj => this.renderClients(letterObj))}
            </div>
        )
    }
}

export default Contacts;