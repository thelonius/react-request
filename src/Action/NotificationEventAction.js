import Constants from '../Constant/NotificationEventConstants';
import { post, get } from '../utils/ajax';
import obj from '../config';

function postError(error) {
	return {
		type: Constants.SEND_DATA_ERROR_NOTIF_EVENT,
		error
	};
}

function postSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_NOTIF_EVENT
	};
}

export function sendData(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'notificationEvent', action_name: 'SaveData' }), postData)
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
		type: Constants.UPDATE_ITEM_NOTIF_EVENT,
		item
	};
}

export function updateReason(email){
	return {
		type: Constants.UPDATE_REASON_NOTIF_EVENT,
		email
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_NOTIF_EVENT
	};
}

function getDataSuccess(data) {
	return {
		type: Constants.GET_DATA_SUCCESS_NOTIF_EVENT,
		data
	};
}

function getDataError(errors) {
	return {
		type: Constants.GET_DATA_ERROR_NOTIF_EVENT,
		errors
	};
}

export function getData(newPage, newSearch) {
	return dispatch => {
		get(obj.url.createPath({ server_name: 'notificationEvent', action_name: 'Event', page: newPage, search: newSearch }))
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

export function handleUpdateStartDate(date) {
	return {
		type: Constants.UPDATE_DATE_NOTIF_EVENT,
		date
	};
}
