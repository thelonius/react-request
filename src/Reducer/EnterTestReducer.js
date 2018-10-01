import Constants from '../Constant/EnterTestConstants';

export default function RequestInfoReducer(state = {
	tests: {},
	selectedTests: null,
	events: {},
	selectedEvent: null,
	status: '',
	error: '',
	collabs: {},
	selectedCollabs: []
}, action) {
	switch (action.type) {

		case Constants.GET_TESTS_SUCCESS_ENT_TEST:
			return Object.assign({}, state, { tests: action.answer });

		case Constants.SELECT_TESTS_ENT_TEST:
			return Object.assign({}, state, { selectedTests: action.tests });

		case Constants.GET_EVENTS_SUCCESS_ENT_TEST:
			return Object.assign({}, state, { events: action.answer });

		case Constants.SELECT_EVENTS_ENT_TEST:
			return Object.assign({}, state, { selectedEvent: action.event });

		case Constants.GET_COLLABS_SUCCESS_ENT_TEST:
			return Object.assign({}, state, { collabs: action.answer });

		case Constants.SELECT_COLLABS_ENT_TEST:
			return Object.assign({}, state, { selectedCollabs: action.collabs });

		case Constants.SUBMIT_ENT_TEST:
			return Object.assign({}, state, { status: 'success', tests: {}, selectedTests: null, events: {}, selectedEvent: null, collabs: {}, selectedCollabs: [] });

		case Constants.GET_DATA_ERROR_ENT_TEST:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS_ENT_TEST:
			return Object.assign({}, state, { status: '', error: '' });

		case Constants.ADD_SCORE_ENT_TEST:
			return Object.assign({}, state, { selectedCollabs: action.collabs });

		default: return state;
	}
}