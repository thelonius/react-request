import Constants from '../Constant/TransferMaterialConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function postError(error) {
	return {
		type: Constants.SEND_DATA_ERROR_EXCL_COLLAB,
		error
	};
}

function postSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_EXCL_COLLAB
	};
}

export function sendData(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'transferMaterial', action_name: 'SaveData' }), postData)
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
		type: Constants.UPDATE_ITEM_EXCL_COLLAB,
		item
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_EXCL_COLLAB
	};
}

function getDataSuccess(data) {
	return {
		type: Constants.GET_DATA_SUCCESS_EXCL_COLLAB,
		data
	};
}

function getDataError(errors) {
	return {
		type: Constants.GET_DATA_ERROR_EXCL_COLLAB,
		errors
	};
}

export function getData(newPage, newSearch) {
	return dispatch => {
		const postData = JSON.stringify({ page: newPage, search: newSearch });

		post(obj.url.createPath({ server_name: 'transferMaterial', action_name: 'Collaborators' }), postData)
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
