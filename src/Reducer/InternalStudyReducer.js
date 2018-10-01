import Constants from '../Constant/InternalStudyConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, { status: 'success' });
}

function sendDataError(state, errors) {
	return Object.assign({}, state, { status: 'error', error: errors });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

function rejectData(state) {
	return Object.assign({}, state, {
		eventName: '',
		startDate: new Date(),
		endDate: new Date(),
		status: '',
		error: '',
		form: 'Очное',
		division: '',
		subdivision: '',
		positions: '',
		managersName: '',
		selectedPayload: 1
	});
}

export default function InternalStudyReducer(state = {
	eventName: '',
	startDate: new Date(),
	endDate: new Date(),
	status: '',
	error: '',
	form: 'Формат обучения',
	division: '',
	subdivision: '',
	positions: '',
	managersName: '',
	items: [ { payload: 0, text: 'Формат обучения' }, { payload: 1, text: 'Очное' }, { payload: 2, text: 'Дистанционное' } ],
	selectedPayload: 0
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS:
			return sendDataSuccess(state);

		case Constants.SEND_DATA_ERROR:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS:
			return rejectStatus(state);

		case Constants.UPDATE_EVENT_NAME:
			return Object.assign({}, state, { eventName: action.eventName });

		case Constants.UPDATE_START_DATE:
			return Object.assign({}, state, { startDate: action.startDate });

		case Constants.UPDATE_END_DATE:
			return Object.assign({}, state, { endDate: action.endDate });

		case Constants.UPDATE_FORM:
			return Object.assign({}, state, { form: action.form });

		case Constants.UPDATE_DIVISION:
			return Object.assign({}, state, { division: action.division });

		case Constants.UPDATE_SUBDIVISION:
			return Object.assign({}, state, { subdivision: action.subdivision });

		case Constants.UPDATE_POSITIONS:
			return Object.assign({}, state, { positions: action.positions });

		case Constants.UPDATE_MANAGERS:
			return Object.assign({}, state, { managersName: action.managersName });

		case Constants.UPDATE_PAYLOAD:
			return Object.assign({}, state, { selectedPayload: action.payload });

		case Constants.REJECT_DATA:
			return rejectData(state);

		default: return state;
	}
}
