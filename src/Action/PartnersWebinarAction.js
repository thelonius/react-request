import Constants from '../Constant/PartnersWebinarConstants';
import { post } from '../utils/ajax';
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

export function submit(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'partnersWebinar', action_name: 'Submit' }), postData)
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

export function handleWebinarName(name) {
	return {
		type: Constants.CHANGE_WEB_NAME_PART_WEB,
		name
	};
}

export function handleStartTime(startTime) {
	return {
		type: Constants.CHANGE_START_TIME_PART_WEB,
		startTime
	};
}

export function handleEndTime(endTime) {
	return {
		type: Constants.CHANGE_END_TIME_PART_WEB,
		endTime
	};
}

export function handleChangeTutor(tutor) {
	return {
		type: Constants.CHANGE_TUTOR_PART_WEB,
		tutor
	};
}

export function handleChangeNumCollab(number) {
	return {
		type: Constants.CHANGE_NUMBER_PART_WEB,
		number
	};
}

export function handleUpdateStartDate(startDate){
	return {
		type: Constants.UPDATE_START_DATE_PART_WEB,
		startDate
	};
}

export function handleChangeVideo(video){
	return {
		type: Constants.CHANGE_VIDEO_PART_WEB,
		video
	};
}

export function handleChangeChat(chat) {
	return {
		type: Constants.CHANGE_CHAT_PART_WEB,
		chat
	};
}

export function handleRejectStatus(){
	return {
		type: Constants.REJECT_STATUS_PART_WEB
	};
}
