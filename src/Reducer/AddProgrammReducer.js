import Constants from '../Constant/AddProgrammConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		error: '',
		form: 'Тип бизнеса',
		selectedBusiness: 0,
		test: false,
		selectedOrg: null,
		orgs: {},
		programmName: ''
	});
}

function sendDataError(state, error) {
	return Object.assign({}, state, { status: 'error', error: error });
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function InternalStudyReducer(state = {
	status: '',
	error: '',
	form: 'Тип бизнеса',
	businessType: [ { payload: 0, text: 'Тип бизнеса' }, { payload: 1, text: 'CITILINK' }, { payload: 2, text: 'MERLION' } ],
	selectedBusiness: 0,
	test: false,
	selectedOrg: null,
	orgs: {},
	programmName: ''
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_ADD_PROG:
			return sendDataSuccess(state);

		case Constants.GET_ERROR_ADD_PROG:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_ADD_PROG:
			return rejectStatus(state);

		case Constants.UPDATE_BUSINESS_ADD_PROG:
			return Object.assign({}, state, { form: action.business });

		case Constants.UPDATE_PAYLOAD_ADD_PROG:
			return Object.assign({}, state, { selectedBusiness: action.payload });

		case Constants.GET_ORGS_SUCCESS_ADD_PROG:
			return Object.assign({}, state, { orgs: action.answer });

		case Constants.SELECT_ORG_ADD_PROG:
			return Object.assign({}, state, { selectedOrg: action.org });

		case Constants.UPDATE_PROG_NAME_ADD_PROG:
			return Object.assign({}, state, { programmName: action.name });

		case Constants.CHANGE_TEST_ADD_PROG:
			return Object.assign({}, state, { test: action.test });

		default: return state;
	}
}
