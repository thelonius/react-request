import Constants from '../Constant/PurposeCourseConstants';

export default function PurposeCourseReducer(state = {
	course: {},
	selectedCourse: [],
	date: new Date(),
	status: '',
	error: '',
	collabs: {},
	selectedCollabs: []
}, action) {
	switch (action.type) {

		case Constants.GET_COURSE_SUCCESS_PURP_COURSE:
			return Object.assign({}, state, { course: action.answer });

		case Constants.SELECT_COURSE_PURP_COURSE:
			return Object.assign({}, state, { selectedCourse: action.course });

		case Constants.GET_EVENTS_SUCCESS_PURP_COURSE:
			return Object.assign({}, state, { events: action.answer });

		case Constants.CHANGE_DATE_PURP_COURSE:
			return Object.assign({}, state, { date: action.date });

		case Constants.GET_COLLABS_SUCCESS_PURP_COURSE:
			return Object.assign({}, state, { collabs: action.answer });

		case Constants.SELECT_COLLABS_PURP_COURSE:
			return Object.assign({}, state, { selectedCollabs: action.collabs });

		case Constants.SUBMIT_PURP_COURSE:
			return Object.assign({}, state, { status: 'success', course: {}, selectedCourse: [], date: new Date(), collabs: {}, selectedCollabs: [] });

		case Constants.GET_DATA_ERROR_PURP_COURSE:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS_PURP_COURSE:
			return Object.assign({}, state, { status: '', error: '' });

		default: return state;
	}
}
