import Constants from '../Constant/RequestConstants';

export default function RequestReducer(state = {
	requests: [],
	dropItems:[ { payload: 1, text: 'Все заявки' }, { payload: 2, text: 'Поданные вам заявки' }, { payload: 3, text: 'Поданные вами заявки' }, { payload: 4, text: 'На утверждение' } ],
	selectedPayload: 1,
	search: '',
	page: 1,
	loading: true,
	error: '',
	status: '',
	chooseRequest: false,
	requestNameFilter: {},
	pagesCount: 1
}, action) {
	switch (action.type) {

		case Constants.GET_DATA_SUCCESS:
			return Object.assign({}, state, {
				requests: state.requests.concat(action.items),
				page: action.newPage,
				pagesCount: action.pagesCount,
				search: action.newSearch,
				selectedPayload: action.selectedPayload,
				loading: false,
				requestNameFilter: action.requestNameFilter
			});

		case Constants.LOADING:
			return Object.assign({}, state, { loading: true });

		case Constants.REJECT_REQUESTS:
			return Object.assign({}, state, { requests: [] });

		case Constants.GET_DATA_ERROR:
			return Object.assign({}, state, { error: action.error, status: 'error', loading: false });

		case Constants.REJECT_STATUS:
			return Object.assign({}, state, { error: '', status: '' });

		case Constants.NEW_REQUEST:
			return Object.assign({}, state, { chooseRequest: true });

		case Constants.ACTION_SUCCESS:
			return Object.assign({}, state, { status: 'success', error: action.answer });

		default: return state;
	}
}
