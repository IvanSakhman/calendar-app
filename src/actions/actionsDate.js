import {
    GET_ALL_MEETINGS,
    SET_CURRENT_MEETING,
    EDIT_MEETING,
    UPDATE_MEETING,
    CREATE_MEETING,
    DELETE_MEETING,
    SAVE_NEW_MEETING,
    TOGGLE_FORM
} from '../constants/constants';

let meetings = {};

export const actions = {
    getAllMeetings: () => {
        return (dispatch) => {
            dispatch(
                {
                    type: GET_ALL_MEETINGS,
                    payload: meetings
                }
            );
        }
    },

    setCurrentMeeting: (meeting) => {
        return {
            type: SET_CURRENT_MEETING,
            payload: meeting
        }
    },
    editMeeting: () => {
        return {
            type: EDIT_MEETING
        }
    },

    updateMeeting: (meeting) => {
        return {
            type: UPDATE_MEETING,
            payload: meeting
        }
    },

    createMeeting: (meeting) => {
        return {
            type: CREATE_MEETING
        }
    },

    saveNewMeeting: (meeting) => {
        return {
            type: SAVE_NEW_MEETING,
            payload: meeting
        }
    },

    deleteMeeting: (meetingId) => {
        return {
            type: DELETE_MEETING,
            payload: meetingId
        }
    },

    toggleForm: () => {
        return {
            type: TOGGLE_FORM
        }
    }
};
