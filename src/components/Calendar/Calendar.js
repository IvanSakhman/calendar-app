import React, { Component } from 'react';
import DayNames from '../DayNames';
import Week from '../Week';
import arrow from './img/arrow.svg';
import styles from './Calendar.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../actions/actionsDate';
import Day from '../Day';
import moment from 'moment';

class Calendar extends Component {

    componentDidMount(){
        this.props.actions.getAllMeetings();
    };

    state = {
        month: moment().startOf("day").clone(),
        selected: moment().startOf("day")
    };

    previous = () => {
        let month = this.state.month;
        month.add(-1, "M");
        this.setState({ month: month });
    };

    next = () => {
        let month = this.state.month;
        month.add(1, "M");
        this.setState({ month: month });
    };

    select = (day) => {
        this.setState({selected: day.date});
        this.forceUpdate();
    };

    renderWeeks = () => {
        let weeks = [],
            done = false,
            date = this.state.month.clone().startOf("month").add("w" - 1).day("Sunday"),
            monthIndex = date.month(),
            count = 0;

        while ( !done ) {
            weeks.push(<Week key={date.toString()} date={date.clone()} month={this.state.month} select={this.select} selected={this.state.selected} planned={this.props.meetings}/>);
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }

        return weeks;
    };

    renderMonthLabel = () => {
        return <span className={styles.month}>{this.state.month.format("MMM YYYY")}</span>
    };

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.calendar}>
                    <div className={styles.nav}>
                        <img className={styles.arrow} src={arrow} onClick={this.previous} alt="arrow"/>
                        {this.renderMonthLabel()}
                        <img className={`${styles.arrow} ${styles.rightArrow}`} src={arrow} onClick={this.next} alt="arrow"/>
                    </div>
                    <DayNames />
                    {this.renderWeeks()}
                </div>
                <Day selected={this.state.selected} date={this.state.selected.format('DDMMMYY')}/>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings.all,
        current: state.meetings.current
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);