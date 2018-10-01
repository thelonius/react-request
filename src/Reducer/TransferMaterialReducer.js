import Constants from '../Constant/ExclusionCollabConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, { status: 'success', error: '', data: {}, reason: '', selectedItem: null });
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
	reason: '',
	selectedItem: null
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_EXCL_COLLAB:
			return sendDataSuccess(state);

		case Constants.SEND_DATA_ERROR_EXCL_COLLAB:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_EXCL_COLLAB:
			return rejectStatus(state);

		case Constants.GET_DATA_SUCCESS_EXCL_COLLAB:
			return Object.assign({}, state, { data: action.data });

		case Constants.GET_DATA_ERROR_EXCL_COLLAB:
			return Object.assign({}, state, { status: 'error', error: action.errors });

		case Constants.UPDATE_ITEM_EXCL_COLLAB:
			return Object.assign({}, state, { selectedItem: action.item });

		default: return state;
	}
}
