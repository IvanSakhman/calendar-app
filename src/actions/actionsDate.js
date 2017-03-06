export const GET_ALL_MEETINGS = 'GET_ALL_MEETINGS';
export const SET_CURRENT_MEETING = 'SET_CURRENT_MEETING';
export const EDIT_MEETING = 'EDIT_MEETING';
export const UPDATE_MEETING = 'UPDATE_MEETING';
export const CREATE_MEETING = 'CREATE_MEETING';
export const DELETE_MEETING = 'DELETE_MEETING';
export const SAVE_NEW_MEETING = 'SAVE_NEW_MEETING';
export const TOGGLE_FORM = 'TOGGLE_FORM';

let meetings = {
    "array": [{ name: 'name', description: 'desc'}, { name: 'name', description: 'desc'}],
    "array1": [{ name: 'name', description: 'desc'}, { name: 'name', description: 'desc'}],
    "array2": [{ name: 'name', description: 'desc'}, { name: 'name', description: 'desc'}]
};

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
