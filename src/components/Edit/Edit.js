import React, { Component } from 'react';
import styles from './Edit.scss';
import { connect } from 'react-redux';

class Edit extends Component {
    constructor(props){
        super(props);
        if (this.props.form.newEntry) {
            this.state = {
                date: 'new',
                name: '',
                description: '',
                errors: {}
            }
        } else {
            this.state = {
                date: this.props.date,
                name: this.props.name,
                description: this.props.description,
                errors: {}
            }
        }
    }

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
                    <div className={styles.buttons}>
                        <button className={styles.cancel}>Cancel</button>
                        <input type="submit" className={styles.submit} value="SAVE"/>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        form: state.form
    }
}

export default connect( mapStateToProps )(Edit);