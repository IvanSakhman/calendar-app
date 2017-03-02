import React, { Component } from 'react';
import styles from './SideBar.scss';
import avatar from './img/avatar.png';
import uploads from './img/uploads.svg';
import settings from './img/settings.svg';
import schedule from './img/schedule.svg';
import head from './img/head.svg';

class SideBar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.avatarContainer}>
                    <img src={avatar} alt="avatar" className={styles.avatar} />
                </div>
                <div className={styles.menu}>
                    <button className={styles.settings}>
                        <img src={settings} alt="settings" className={styles.img} />
                    </button>
                    <input type="file" name="upload" className={styles.upload} id="upload" />
                    <label htmlFor="upload">
                        <img src={uploads} alt="uploads" className={styles.img} />
                    </label>
                </div>
                <div className={styles.nav}>
                    <div className={styles.item}>
                        <img src={schedule} alt="schedule" className={styles.schedule}/>
                        <div className={styles.text}>Schedule</div>
                        <div className={styles.number}>8</div>
                    </div>
                    <div className={styles.item}>
                        <img src={head} alt="head" className={styles.clients}/>
                        <div className={styles.text}>My clients</div>
                        <div className={styles.number}>1</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;