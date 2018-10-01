import Constants from '../Constant/RequestConstants';

export default function NewRequestReducer(state = {
	requestNameFilter: null
}, action) {
	switch (action.type) {

		case Constants.GET_REQUESTS_NAME:
			return Object.assign({}, state, { requestNameFilter: action.requestNameFilter });

		default: return state;
	}
}