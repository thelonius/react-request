import Constants from '../Constant/PurposeTestConstants';

export default function PurposeTestReducer(state = {
	tests: {},
	selectedTests: [],
	events: {},
	selectedEvent: null,
	date: new Date(),
	status: '',
	error: '',
	collabs: {},
	selectedCollabs: []
}, action) {
	switch (action.type) {

		case Constants.GET_TESTS_SUCCESS_PURP_TEST:
			return Object.assign({}, state, { tests: action.answer });

		case Constants.SELECT_TESTS_PURP_TEST:
			return Object.assign({}, state, { selectedTests: action.tests });

		case Constants.GET_EVENTS_SUCCESS_PURP_TEST:
			return Object.assign({}, state, { events: action.answer });

		case Constants.SELECT_EVENTS_PURP_TEST:
			return Object.assign({}, state, { selectedEvent: action.event });

		case Constants.CHANGE_DATE_PURP_TEST:
			return Object.assign({}, state, { date: action.date });

		case Constants.GET_COLLABS_SUCCESS_PURP_TEST:
			return Object.assign({}, state, { collabs: action.answer });

		case Constants.SELECT_COLLABS_PURP_TEST:
			return Object.assign({}, state, { selectedCollabs: action.collabs });

		case Constants.SUBMIT_PURP_TEST:
			return Object.assign({}, state, { status: 'success', tests: {}, selectedTests: [], events: {}, selectedEvent: null, date: new Date(), collabs: {}, selectedCollabs: [] });

		case Constants.GET_DATA_ERROR_PURP_TEST:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS_PURP_TEST:
			return Object.assign({}, state, { status: '', error: '' });

		default: return state;
	}
}
