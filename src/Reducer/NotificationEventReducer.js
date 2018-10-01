import Constants from '../Constant/NotificationEventConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, { status: 'success', error: '', data: {}, email: '', selectedItem: null });
}

function sendDataError(state, errors) {
	return Object.assign({}, state, { status: 'error', error: errors });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function ExclusionCollabReducer(state = {
	status: '',
	error: '',
	data: {},
	email: '',
	selectedItem: null,
	date: new Date().toISOString()
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_NOTIF_EVENT:
			return sendDataSuccess(state);

		case Constants.SEND_DATA_ERROR_NOTIF_EVENT:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_NOTIF_EVENT:
			return rejectStatus(state);

		case Constants.UPDATE_REASON_NOTIF_EVENT:
			return Object.assign({}, state, { email: action.email });

		case Constants.GET_DATA_SUCCESS_NOTIF_EVENT:
			return Object.assign({}, state, { data: action.data });

		case Constants.GET_DATA_ERROR_NOTIF_EVENT:
			return Object.assign({}, state, { status: 'error', error: action.errors });

		case Constants.UPDATE_ITEM_NOTIF_EVENT:
			return Object.assign({}, state, { selectedItem: action.item });

		case Constants.UPDATE_DATE_NOTIF_EVENT:
			return Object.assign({}, state, { date: action.date });

		default: return state;
	}
}
