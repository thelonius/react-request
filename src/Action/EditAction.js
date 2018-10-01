import Constants from '../Constant/InternalStudyConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function sendDataError(error) {
	return {
		type: Constants.SEND_DATA_ERROR,
		error
	};
}

function sendDataSuccess() {
	return {
		type: Constants.SEND_DATA_SUCCESS
	};
}

export function sendData(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'internalStudy', action_name: 'Submit' }), postData)
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
		type: Constants.UPDATE_START_DATE,
		startDate
	};
}

export function handleUpdateEndDate(endDate){
	return {
		type: Constants.UPDATE_END_DATE,
		endDate
	};
}

export function handleUpdateEventName(eventName){
	return {
		type: Constants.UPDATE_EVENT_NAME,
		eventName
	};
}

export function updateFormOfHolding(form){
	return {
		type: Constants.UPDATE_FORM,
		form
	};
}

export function updateSelectedPayload(payload){
	return {
		type: Constants.UPDATE_PAYLOAD,
		payload
	};
}

export function updateDivision(division){
	return {
		type: Constants.UPDATE_DIVISION,
		division
	};
}

export function updateSubdivision(subdivision){
	return {
		type: Constants.UPDATE_SUBDIVISION,
		subdivision
	};
}

export function updatePositions(positions){
	return {
		type: Constants.UPDATE_POSITIONS,
		positions
	};
}

export function updateManagersName(managersName) {
	return {
		type: Constants.UPDATE_MANAGERS,
		managersName
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS
	};
}

export function rejectData() {
	return {
		type: Constants.REJECT_DATA
	};
}
