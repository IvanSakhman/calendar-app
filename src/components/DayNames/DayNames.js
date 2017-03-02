import React, { Component } from 'react';
import styles from './DayNames.scss';

class DayNames extends Component {
    render() {
        return (
            <div className={styles.names}>
                <span className={styles.day}>Mon</span>
                <span className={styles.day}>Tue</span>
                <span className={styles.day}>Wed</span>
                <span className={styles.day}>Thu</span>
                <span className={styles.day}>Fri</span>
                <span className={styles.day}>Sat</span>
                <span className={styles.day}>Sun</span>
            </div>
        )
    }
}

export default DayNames;