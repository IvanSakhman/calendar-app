import React, { Component } from 'react';
import styles from './Edit.scss';

class Edit extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>New meeting on September 22</h2>
                <form className={styles.form}>
                    <label className={styles.participant}>
                        Participant
                        <input className={styles.name} type="text" placeholder="Name"/>
                    </label>
                    <p className={styles.desc}>Description</p>
                    <textarea className={styles.textarea} placeholder="Meeting description">
                    </textarea>
                    <div className="buttons">
                        <button className="cancel">Cancel</button>
                        <input type="submit" className="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit;