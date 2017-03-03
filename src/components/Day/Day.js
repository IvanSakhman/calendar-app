import React, { Component } from 'react';
import edit from './img/edit.svg';
import remove from './img/remove.svg';
import styles from './Day.scss';

class Day extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h2 className={styles.title}>September 22</h2>
                <button className={styles.button}>CREATE</button>
                <div className={styles.item}>
                    <p className={styles.desc}>Scheduling a meeting time shouldn't be hard</p>
                    <div className={styles.controls}>
                        <img className={styles.edit} src={edit} alt="edit"/>
                        <img className={styles.remove} src={remove} alt="remove"/>
                    </div>
                    <p className={styles.partner}>Stella Adler</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.desc}>Democratic way to coordinate</p>
                    <div className={styles.controls}>
                        <img className={styles.edit} src={edit} alt="edit"/>
                        <img className={styles.remove} src={remove} alt="remove"/>
                    </div>
                    <p className={styles.partner}>Eddy Arnold</p>
                </div>
            </div>
        )
    }
}

export default Day;