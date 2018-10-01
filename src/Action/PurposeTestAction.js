import Constants from '../Constant/PurposeTestConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function getDataError(error) {
	return {
		type: Constants.GET_DATA_ERROR_PURP_TEST,
		error
	};
}

function getDataSuccess(answer) {
	return {
		type: Constants.GET_TESTS_SUCCESS_PURP_TEST,
		answer
	};
}

export function getTests(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeTest', action_name: 'Tests' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getDataError(answer.error));
			} else {
				dispatch(getDataSuccess(answer));
			}
		}).catch(e => {
			dispatch(getDataError(e.message));
		});
	};
}

export function handleSaveTests(tests) {
	return {
		type: Constants.SELECT_TESTS_PURP_TEST,
		tests
	};
}

export function handleSaveEvents(event) {
	return {
		type: Constants.SELECT_EVENTS_PURP_TEST,
		event
	};
}

function getEventsSuccess(answer) {
	return {
		type: Constants.GET_EVENTS_SUCCESS_PURP_TEST,
		answer
	};
}

export function handleGetEvents(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeTest', action_name: 'Events' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getDataError(answer.error));
			} else {
				dispatch(getEventsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getDataError(e.message));
		});
	};
}

export function handleChangeDate(date) {
	return {
		type: Constants.CHANGE_DATE_PURP_TEST,
		date
	};
}

function getCollabsSuccess(answer) {
	return {
		type: Constants.GET_COLLABS_SUCCESS_PURP_TEST,
		answer
	};
}

export function getCollabs(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeTest', action_name: 'Collabs' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getDataError(answer.error));
			} else {
				dispatch(getCollabsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getDataError(e.message));
		});
	};
}

export function handleSaveCollabs(collabs) {
	return {
		type: Constants.SELECT_COLLABS_PURP_TEST,
		collabs
	};
}

function submitSuccess(){
	return {
		type: Constants.SUBMIT_PURP_TEST
	};
}

export function handleSubmit(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'purposeTest', action_name: 'Submit' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getDataError(answer.error));
			} else {
				dispatch(submitSuccess());
			}
		}).catch(e => {
			dispatch(getDataError(e.message));
		});
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_PURP_TEST
	};
}
