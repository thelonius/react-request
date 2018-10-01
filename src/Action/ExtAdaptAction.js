import Constants from '../Constant/ExtensionAdaptConstants';
import { get, post } from '../utils/ajax';
import obj from '../config';

function postError(error) {
	return {
		type: Constants.SEND_DATA_ERROR_EXT_ADAPT,
		error
	};
}

function postSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_EXT_ADAPT
	};
}

export function sendData(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'Test', action_name: 'SaveData' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(postError(answer.error));
			} else {
				dispatch(postSuccess());
			}
		}).catch(e => {
			dispatch(postError(e.message));
		});
	};
}

export function updateItem(item) {
	return {
		type: Constants.UPDATE_ITEM_EXT_ADAPT,
		item
	};
}

export function updateDate(date){
	return {
		type: Constants.UPDATE_DATE_EXT_ADAPT,
		date
	};
}

export function updateReason(reason){
	return {
		type: Constants.UPDATE_REASON_EXT_ADAPT,
		reason
	};
}

export function rejectStatus() {
	return {
		type: Constants.REJECT_STATUS_EXT_ADAPT
	};
}

function getDataSuccess(data) {
	return {
		type: Constants.GET_DATA_SUCCESS_EXT_ADAPT,
		data
	};
}

function getDataError(errors) {
	return {
		type: Constants.GET_DATA_ERROR_EXT_ADAPT,
		errors
	};
}

export function getData(newPage, newSearch) {
	return dispatch => {
		const path = obj.url.createPath({ server_name: 'Test', action_name: 'Collaborators', page: newPage, search: newSearch });

		get(path)
		.then(_items => JSON.parse(_items))
		.then(_items => {
			if (_items.error) {
				dispatch(getDataError(_items.error));
			} else {
				dispatch(getDataSuccess(_items));
			}
		})
		.catch(e => {
			dispatch(getDataError(e.message));
		});
	};
}
