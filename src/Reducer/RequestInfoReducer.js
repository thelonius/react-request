import Constants from '../Constant/RequestConstants';

export default function RequestInfoReducer(state = {
	id: null,
	code: '',
	requestInfo: [],
	requestAction: [],
	status: '',
	error: ''
}, action) {
	switch (action.type) {

		case Constants.ACTION_SUCCESS:
			return Object.assign({}, state, { status: 'success', error: action.answer });

		case Constants.GET_INFO_SUCCESS:
			return Object.assign({}, state, { id: action.id, requestInfo: action.requestInfo, requestAction: action.requestAction });

		case Constants.GET_DATA_ERROR:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS:
			return Object.assign({}, state, { error: '', status: '' });

		case Constants.REJECT_INFO:
			return Object.assign({}, state, { id: '', code: '', requestInfo: [], requestAction: [], status: '', error: '' });

		default: return state;
	}
}