import Constants from '../Constant/RequestConstants';
import { get } from '../utils/ajax';
import obj from '../config';

function getInfoSuccess(answer) {
	return {
		type: Constants.GET_INFO_SUCCESS,
		...answer
	};
}

function getError(error) {
	return {
		type: Constants.GET_DATA_ERROR,
		error
	};
}

export function handleGetRequestInfo(id) {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'Requests', action_name: 'RequestInfo', id: id }), true)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getInfoSuccess(answer));
			}
		})
		.catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function actionRequest(id, code) {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'Requests', action_name: 'ActionRequest', id: id, code: code }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(actionSuccess(answer.answer));
			}
		})
		.catch(e => {
			dispatch(getError(e.message));
		});
	};
}

function actionSuccess(answer) {
	return {
		type: Constants.ACTION_SUCCESS,
		answer
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS
	};
}

export function rejectInfo() {
	return {
		type: Constants.REJECT_INFO
	};
}

export function handleGetNewRequests() {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'Requests', action_name: 'NewRequests' }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			dispatch(getSuccess(answer));
		})
		.catch(e => {
			dispatch(getError(e.message));
		});
	};
}

function getSuccess(answer) {
	return {
		type: Constants.GET_REQUESTS_NAME,
		...answer
	};
}
