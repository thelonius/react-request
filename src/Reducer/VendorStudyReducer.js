import Constants from '../Constant/VendorStudyConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		eventName: '',
		startDate: new Date(new Date().setHours(0, 0, 0, 0)),
		form: '',
		division: '',
		subdivision: '',
		selectedPayload: 0,
		vendorName: '',
		reason: '',
		time: '',
		selectedTest: 0,
		test: '',
		managers: ''
	});
}

function sendDataError(state, errors) {
	return Object.assign({}, state, { status: 'error', error: errors });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function VendorStudyReducer(state = {
	eventName: '',
	startDate: new Date(new Date().setHours(0, 0, 0, 0)),
	status: '',
	error: '',
	form: '',
	division: '',
	subdivision: '',
	items: [ { payload: 0, text: 'Форма проведения' }, { payload: 1, text: 'Учебный класс Мякинино' }, { payload: 2, text: 'Вебинар' } ],
	selectedPayload: 0,
	vendorName: '',
	reason: '',
	time: '',
	tests: [ { payload: 0, text: 'Необходимость тестирования после обучения' }, { payload: 1, text: 'Да' }, { payload: 2, text: 'Нет' } ],
	selectedTest: 0,
	test: '',
	managers: ''
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_VEN:
			return sendDataSuccess(state);

		case Constants.SEND_DATA_ERROR_VEN:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_VEN:
			return rejectStatus(state);

		case Constants.UPDATE_EVENT_NAME_VEN:
			return Object.assign({}, state, { eventName: action.eventName });

		case Constants.UPDATE_START_DATE_VEN:
			return Object.assign({}, state, { startDate: action.startDate });

		case Constants.UPDATE_FORM_VEN:
			return Object.assign({}, state, { form: action.form });

		case Constants.UPDATE_DIVISION_VEN:
			return Object.assign({}, state, { division: action.division });

		case Constants.UPDATE_SUBDIVISION_VEN:
			return Object.assign({}, state, { subdivision: action.subdivision });

		case Constants.UPDATE_PAYLOAD_VEN:
			return Object.assign({}, state, { selectedPayload: action.payload });

		case Constants.UPDATE_VENDOR_NAME_VEN:
			return Object.assign({}, state, { vendorName: action.vendorName });

		case Constants.UPDATE_REASON_VEN:
			return Object.assign({}, state, { reason: action.reason });

		case Constants.UPDATE_TIME_VEN:
			return Object.assign({}, state, { time: action.time });

		case Constants.UPDATE_TEST_VEN:
			return Object.assign({}, state, { selectedTest: action.payload, test: action.text });

		case Constants.UPDATE_MANAGERS_VEN:
			return Object.assign({}, state, { managers: action.managers });

		default: return state;
	}
}
