import Constants from '../Constant/EnterTestConstants';
import { post } from '../utils/ajax';
import obj from '../config';

export function getDataError(error) {
	return {
		type: Constants.GET_DATA_ERROR_ENT_TEST,
		error
	};
}

function getDataSuccess(answer) {
	return {
		type: Constants.GET_TESTS_SUCCESS_ENT_TEST,
		answer
	};
}

export function handleGetTests(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'enterTest', action_name: 'Tests' }), postData)
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
		type: Constants.SELECT_TESTS_ENT_TEST,
		tests
	};
}

export function handleSaveEvents(event) {
	return {
		type: Constants.SELECT_EVENTS_ENT_TEST,
		event
	};
}

function getEventsSuccess(answer) {
	return {
		type: Constants.GET_EVENTS_SUCCESS_ENT_TEST,
		answer
	};
}

export function handleGetEvents(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'enterTest', action_name: 'Events' }), postData)
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

function getCollabsSuccess(answer) {
	return {
		type: Constants.GET_COLLABS_SUCCESS_ENT_TEST,
		answer
	};
}

export function getCollabs(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'enterTest', action_name: 'Collabs' }), postData)
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
		type: Constants.SELECT_COLLABS_ENT_TEST,
		collabs
	};
}

function submitSuccess(){
	return {
		type: Constants.SUBMIT_ENT_TEST
	};
}

export function handleSubmit(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'enterTest', action_name: 'Submit' }), postData)
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
		type: Constants.REJECT_STATUS_ENT_TEST
	};
}

export function addScore(collabs) {
	return {
		type: Constants.ADD_SCORE_ENT_TEST,
		collabs
	};
}
