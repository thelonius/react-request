import Constants from '../Constant/NewAdaptStartConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function getError(error) {
	return {
		type: Constants.GET_ERROR_NEW_ADAPT,
		error
	};
}

function sendDataSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_NEW_ADAPT
	};
}

export function sendData(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'newAdaptStart', action_name: 'Submit' }), postData)
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

function getCollabsSuccess(answer) {
	return {
		type: Constants.GET_COLLABS_SUCCESS_NEW_ADAPT,
		answer
	};
}

export function handleSaveCollab(collab) {
	return {
		type: Constants.SELECT_COLLAB_NEW_ADAPT,
		collab
	};
}

export function handleSaveHR(HR) {
	return {
		type: Constants.SELECT_HR_NEW_ADAPT,
		HR
	};
}

export function handleSaveHRSec(HR) {
	return {
		type: Constants.SELECT_HR_SEC_NEW_ADAPT,
		HR
	};
}

export function handleSaveManager(manager) {
	return {
		type: Constants.SELECT_MANAGER_NEW_ADAPT,
		manager
	};
}

export function handleSaveTutor(tutor) {
	return {
		type: Constants.SELECT_TUTOR_NEW_ADAPT,
		tutor
	};
}

export function handleSaveTutorSec(tutor) {
	return {
		type: Constants.SELECT_TUTOR_SEC_NEW_ADAPT,
		tutor
	};
}

export function handleGetCollabs(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'newAdaptStart', action_name: 'Collabs' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getCollabsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

function getAdaptsSuccess(answer) {
	return {
		type: Constants.GET_ADAPTS_SUCCESS_NEW_ADAPT,
		answer
	};
}

export function handleSaveAdapt(adapt) {
	return {
		type: Constants.SELECT_ADAPT_NEW_ADAPT,
		adapt
	};
}

export function handleGetAdapts(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'newAdaptStart', action_name: 'Adapts' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getAdaptsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function handleUpdateStartDate(startDate){
	return {
		type: Constants.UPDATE_START_DATE_NEW_ADAPT,
		startDate
	};
}

export function handleUpdateEndDate(endDate){
	return {
		type: Constants.UPDATE_END_DATE_NEW_ADAPT,
		endDate
	};
}

export function updateFormOfHolding(form){
	return {
		type: Constants.UPDATE_FORM_NEW_ADAPT,
		form
	};
}

export function updateSelectedPayload(payload){
	return {
		type: Constants.UPDATE_PAYLOAD_NEW_ADAPT,
		payload
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_NEW_ADAPT
	};
}

export function rejectData() {
	return {
		type: Constants.REJECT_DATA_NEW_ADAPT
	};
}
