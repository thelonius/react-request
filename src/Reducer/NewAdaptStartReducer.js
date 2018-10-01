import Constants from '../Constant/NewAdaptStartConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		startDate: new Date().toISOString(),
		endDate: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(),
		form: 'Тип бизнеса',
		selectedAdapt: null,
		selectedCollab: null,
		selectedHR: null,
		selectedManager: null,
		selectedTutor: null,
		selectedPayload: 0,
		selectedHRSec: null,
		selectedTutorSec: null
	});
}

function sendDataError(state, errors) {
	return Object.assign({}, state, { status: 'error', error: errors });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function InternalStudyReducer(state = {
	startDate: new Date().toISOString(),
	endDate: new Date(new Date().setDate(new Date().getDate() + 90)).toISOString(),
	status: '',
	error: '',
	form: 'Тип бизнеса',
	adapts: {},
	selectedAdapt: null,
	collabs: {},
	selectedCollab: null,
	selectedHR: null,
	selectedManager: null,
	selectedTutor: null,
	items: [ { payload: 0, text: 'Тип бизнеса' }, { payload: 1, text: 'CITILINK' }, { payload: 2, text: 'MERLION' } ],
	selectedPayload: 0,
	selectedHRSec: null,
	selectedTutorSec: null
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_NEW_ADAPT:
			return sendDataSuccess(state);

		case Constants.GET_ERROR_NEW_ADAPT:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_NEW_ADAPT:
			return rejectStatus(state);

		case Constants.UPDATE_START_DATE_NEW_ADAPT:
			return Object.assign({}, state, { startDate: action.startDate, endDate: new Date(new Date(action.startDate).setDate(new Date(action.startDate).getDate() + 90)).toISOString() });

		case Constants.UPDATE_END_DATE_NEW_ADAPT:
			return Object.assign({}, state, { endDate: action.endDate });

		case Constants.UPDATE_FORM_NEW_ADAPT:
			return Object.assign({}, state, { form: action.form });

		case Constants.UPDATE_PAYLOAD_NEW_ADAPT:
			return Object.assign({}, state, { selectedPayload: action.payload });

		case Constants.GET_COLLABS_SUCCESS_NEW_ADAPT:
			return Object.assign({}, state, { collabs: action.answer });

		case Constants.GET_ADAPTS_SUCCESS_NEW_ADAPT:
			return Object.assign({}, state, { adapts: action.answer });

		case Constants.SELECT_COLLAB_NEW_ADAPT:
			return Object.assign({}, state, { selectedCollab: action.collab });

		case Constants.SELECT_HR_NEW_ADAPT:
			return Object.assign({}, state, { selectedHR: action.HR });

		case Constants.SELECT_HR_SEC_NEW_ADAPT:
			return Object.assign({}, state, { selectedHRSec: action.HR });

		case Constants.SELECT_MANAGER_NEW_ADAPT:
			return Object.assign({}, state, { selectedManager: action.manager });

		case Constants.SELECT_TUTOR_NEW_ADAPT:
			return Object.assign({}, state, { selectedTutor: action.tutor });

		case Constants.SELECT_TUTOR_SEC_NEW_ADAPT:
			return Object.assign({}, state, { selectedTutorSec: action.tutor });

		case Constants.SELECT_ADAPT_NEW_ADAPT:
			return Object.assign({}, state, { selectedAdapt: action.adapt });

		default: return state;
	}
}
