import React, { Component } from 'react';
import styles from './SideBar.scss';
import avatar from './img/avatar.png';
import uploads from './img/uploads.svg';
import settings from './img/settings.svg';

class SideBar extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.avatarContainer}>
                    <img src={avatar} alt="avatar" className={styles.avatar}/>
                </div>
                <div className={styles.menu}>
                    <button className={styles.settings}>
                        <img src={settings} alt="settings"/>
                    </button>
                    <input type="file" name="upload" className={styles.upload} id="upload"/>
                    <label htmlFor="upload">
                        <img src={uploads} alt="uploads"/>
                    </label>
                </div>
            </div>
        )
    }
}

export default SideBar;