import Constants from '../Constant/AddProgrammConstants';
import { post, get } from '../utils/ajax';
import obj from '../config';

function getError(error) {
	return {
		type: Constants.GET_ERROR_ADD_PROG,
		error
	};
}

function sendDataSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_ADD_PROG
	};
}

export function sendData(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'addProgramm', action_name: 'Submit' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(sendDataSuccess());
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

function getOrgsSuccess(answer) {
	return {
		type: Constants.GET_ORGS_SUCCESS_ADD_PROG,
		answer
	};
}

export function handleSaveOrg(org) {
	return {
		type: Constants.SELECT_ORG_ADD_PROG,
		org
	};
}

export function handleGetOrgs(page, search) {
	return dispatch => {
		get(obj.url.createPath({ server_name: 'addProgramm', action_name: 'Orgs', page: page, search: search }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getOrgsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function updateBusinessType(business){
	return {
		type: Constants.UPDATE_BUSINESS_ADD_PROG,
		business
	};
}

export function handleUpdateProgrammName(name){
	return {
		type: Constants.UPDATE_PROG_NAME_ADD_PROG,
		name
	};
}


export function updateSelectedPayload(payload){
	return {
		type: Constants.UPDATE_PAYLOAD_ADD_PROG,
		payload
	};
}

export function handleChangeTest(test) {
	return {
		type: Constants.CHANGE_TEST_ADD_PROG,
		test
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_ADD_PROG
	};
}

export function rejectData() {
	return {
		type: Constants.REJECT_DATA_ADD_PROG
	};
}
