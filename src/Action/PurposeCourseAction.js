import Constants from '../Constant/PurposeCourseConstants';
import { post } from '../utils/ajax';
import obj from '../config';

function getDataError(error) {
	return {
		type: Constants.GET_DATA_ERROR_PURP_COURSE,
		error
	};
}

function getDataSuccess(answer) {
	return {
		type: Constants.GET_COURSE_SUCCESS_PURP_COURSE,
		answer
	};
}

export function getCourse(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeCourse', action_name: 'Course' }), postData)
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

export function handleSaveCourse(course) {
	return {
		type: Constants.SELECT_COURSE_PURP_COURSE,
		course
	};
}

export function handleSaveEvents(event) {
	return {
		type: Constants.SELECT_EVENTS_PURP_COURSE,
		event
	};
}

function getEventsSuccess(answer) {
	return {
		type: Constants.GET_EVENTS_SUCCESS_PURP_COURSE,
		answer
	};
}

export function handleGetEvents(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeCourse', action_name: 'Events' }), postData)
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
		type: Constants.CHANGE_DATE_PURP_COURSE,
		date
	};
}

function getCollabsSuccess(answer) {
	return {
		type: Constants.GET_COLLABS_SUCCESS_PURP_COURSE,
		answer
	};
}

export function getCollabs(page, search) {
	return dispatch => {
		const postData = JSON.stringify({ page: page, search: search });

		post(obj.url.createPath({ server_name: 'purposeCourse', action_name: 'Collabs' }), postData)
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
		type: Constants.SELECT_COLLABS_PURP_COURSE,
		collabs
	};
}

function submitSuccess(){
	return {
		type: Constants.SUBMIT_PURP_COURSE
	};
}

export function handleSubmit(data) {
	return dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'purposeCourse', action_name: 'Submit' }), postData)
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
		type: Constants.REJECT_STATUS_PURP_COURSE
	};
}
