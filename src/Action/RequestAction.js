import Constants from '../Constant/RequestConstants';
import { get } from '../utils/ajax';
import obj from '../config';

function getError(error) {
	return {
		type: Constants.GET_DATA_ERROR,
		error
	};
}

function getSuccess(answer, newSearch, newPage, selectedPayload) {
	return {
		type: Constants.GET_DATA_SUCCESS,
		...answer, newSearch, newPage, selectedPayload
	};
}

function loading() {
	return {
		type: Constants.LOADING
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS
	};
}

export function rejectRequests() {
	return {
		type: Constants.REJECT_REQUESTS
	};
}

export function handleGetRequests(newSearch, newPage, selectedPayload, requestsNum) {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'Requests', action_name: 'Requests', search: newSearch, page: newPage, filter: selectedPayload, number: requestsNum }), true)
		.then(dispatch(loading()))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getSuccess(answer, newSearch, newPage, selectedPayload));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function handleClose() {
	return {
		type: Constants.CLOSE
	};
}
