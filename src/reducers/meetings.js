import { GET_ALL_MEETINGS, UPDATE_MEETING, EDIT_MEETING, CREATE_MEETING, DELETE_MEETING, SAVE_NEW_MEETING, SET_CURRENT_MEETING, TOGGLE_FORM } from '../actions/actionsDate';

function getNextId(lastId) {
    return lastId + 1;
}

const INITIAL_MEETING_STATE = {
    lastId: 0,
    all: [],
    currentMeeting: {id: null}
};

export function meetings(state = INITIAL_MEETING_STATE, action) {
    switch(action.type) {
        case GET_ALL_MEETINGS:
            let lastId = state.lastId;
            let meetings = action.payload.meetings.all.map(meeting => {
                lastId = getNextId(lastId);
                meeting.id = lastId;
                return meeting;
            });
            return Object.assign({}, state, {lastId: lastId}, {all: meetings});
        case SET_CURRENT_MEETING:
            let newCurrent = state.currentMeeting.id === action.payload.id ? INITIAL_MEETING_STATE.currentMeeting
                : action.payload;
            return Object.assign({}, state, {currentMeeting: newCurrent});
        case UPDATE_MEETING:
            return Object.assign({}, state, {currentMeeting: action.payload}, {all: state.all.map(meeting => {
                    if (meeting.id === action.payload.id) {
                        return action.payload;
                    }
                    return meeting;
                })}
            );
        case SAVE_NEW_MEETING:
            let newMeeting = action.payload;
            newMeeting.id = getNextId(state.lastId);
            let allMeetings = state.all;
            allMeetings.push(newMeeting);
            return Object.assign({}, state, {all: allMeetings});
        case DELETE_MEETING:
            return Object.assign({}, state, {all: state.all.filter(meeting => {
                return meeting.id !== action.payload;
            })
            });
        default:
            return state;
    }
}

const INITIAL_FORM_STATE = {
    isOpen: false,
    newEntry: false
};

export function form(state = INITIAL_FORM_STATE, action) {
    switch(action.type) {
        case TOGGLE_FORM:
            return Object.assign({}, state, {isOpen: !state.isOpen});
        case EDIT_MEETING:
            return Object.assign({}, state, {newEntry: false});
        case CREATE_MEETING:
            return Object.assign({}, state, {newEntry: true});
        default:
            return state;
    }
}