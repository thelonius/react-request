import Constants from '../Constant/ExtensionAdaptConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, { status: 'success' });
}

function sendDataError(state, errors) {
	return Object.assign({}, state, { status: 'error', error: errors });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function ExtensionReducer(state = {
	status: '',
	error: '',
	data: {},
	reason: '',
	date: new Date(),
	selectedItem: null
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_EXT_ADAPT:
			return sendDataSuccess(state);

		case Constants.SEND_DATA_ERROR_EXT_ADAPT:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_EXT_ADAPT:
			return rejectStatus(state);

		case Constants.UPDATE_DATE_EXT_ADAPT:
			return Object.assign({}, state, { date: action.date });

		case Constants.UPDATE_REASON_EXT_ADAPT:
			return Object.assign({}, state, { reason: action.reason });

		case Constants.GET_DATA_SUCCESS_EXT_ADAPT:
			return Object.assign({}, state, { data: action.data });

		case Constants.GET_DATA_ERROR_EXT_ADAPT:
			return Object.assign({}, state, { status: 'error', error: action.errors });

		case Constants.UPDATE_ITEM_EXT_ADAPT:
			return Object.assign({}, state, { selectedItem: action.item });

		default: return state;
	}
}