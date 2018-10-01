import Constants from '../Constant/VendorStudyConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function sendDataError(error) {
	return {
		type: Constants.SEND_DATA_ERROR_VEN,
		error
	};
}

function sendDataSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS_VEN
	};
}

export function sendData(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'vendorStudy', action_name: 'Submit' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(sendDataError(answer.error));
			} else {
				dispatch(sendDataSuccess());
			}
		}).catch(e => {
			dispatch(sendDataError(e.message));
		});
	};
}

export function handleUpdateStartDate(startDate){
	return {
		type: Constants.UPDATE_START_DATE_VEN,
		startDate
	};
}

export function handleUpdateEventName(eventName){
	return {
		type: Constants.UPDATE_EVENT_NAME_VEN,
		eventName
	};
}

export function handleUpdateVendorName(vendorName) {
	return {
		type: Constants.UPDATE_VENDOR_NAME_VEN,
		vendorName
	};
}

export function handleUpdateTime(time) {
	return {
		type: Constants.UPDATE_TIME_VEN,
		time
	};
}

export function handleUpdateTest(e, payload, text) {
	return {
		type: Constants.UPDATE_TEST_VEN,
		payload, text
	};
}

export function handleUpdateReason(reason) {
	return {
		type: Constants.UPDATE_REASON_VEN,
		reason
	};
}

export function updateFormOfHolding(form){
	return {
		type: Constants.UPDATE_FORM_VEN,
		form
	};
}

export function updateSelectedPayload(payload){
	return {
		type: Constants.UPDATE_PAYLOAD_VEN,
		payload
	};
}

export function updateDivision(division){
	return {
		type: Constants.UPDATE_DIVISION_VEN,
		division
	};
}

export function updateSubdivision(subdivision){
	return {
		type: Constants.UPDATE_SUBDIVISION_VEN,
		subdivision
	};
}

export function handleUpdateManagers(managers) {
	return {
		type: Constants.UPDATE_MANAGERS_VEN,
		managers
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_VEN
	};
}
