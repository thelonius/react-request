import Constants from '../Constant/TrainingProgramsConstants';
import { post, get } from '../utils/ajax';
import obj from '../config';

function getError(error) {
	return {
		type: Constants.POST_DATA_ERROR,
		error
	};
}

function postSuccess() {
	return {
		type: Constants.ACTION_SUCCESS
	};
}

function getSuccess(answer) {
	return {
		type: Constants.GET_SUCCESS_TR_PROG,
		answer
	};
}

export function handleGetPrograms(newPage, newSearch) {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'trainingProg', action_name: 'EducationMethod', page: newPage, search: newSearch }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function submit(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'trainingProg', action_name: 'Submit' }), postData)
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(postSuccess());
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function handleSavePrograms(program) {
	return {
		type: Constants.CHANGE_PROG_TR_PROG,
		program
	};
}

export function handleStartTime(startTime) {
	return {
		type: Constants.CHANGE_START_TIME_TR_PROG,
		startTime
	};
}

export function handleEndTime(endTime) {
	return {
		type: Constants.CHANGE_END_TIME_TR_PROG,
		endTime
	};
}

export function handleUpdateForm(e, payload, text) {
	return {
		type: Constants.CHANGE_FORM_TR_PROG,
		payload, text
	};
}

export function handleUpdateTown(town) {
	return {
		type: Constants.CHANGE_TOWN_TR_PROG,
		town
	};
}

export function handleUpdateStartDate(startDate){
	return {
		type: Constants.UPDATE_START_DATE_TR_PROG,
		startDate
	};
}

export function handleUpdateComment(comment){
	return {
		type: Constants.CHANGE_COMMENT_TR_PROG,
		comment
	};
}

export function handleRejectStatus(){
	return {
		type: Constants.REJECT_STATUS_TR_PROG
	};
}

export function handleUpdatePositions(positions) {
	return {
		type: Constants.UPDATE_POSITIONS_TR_PROG,
		positions
	};
}

export function handleUpdatePlace(place) {
	return {
		type: Constants.UPDATE_PLACE_TR_PROG,
		place
	};
}
