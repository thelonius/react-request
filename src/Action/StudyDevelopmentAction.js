import Constants from '../Constant/StudyDevelopmentConst';
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

export function handleSubmit(data) {
	return  dispatch => {
		const postData = JSON.stringify(data);

		post(obj.url.createPath({ server_name: 'studyDevelop', action_name: 'Submit' }), postData)
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

export function changeThematic(thematic, text) {
	return {
		type: Constants.CHANGE_THEMATIC_STUDY_DEV,
		thematic, text
	};
}

export function changeFormat(format, text) {
	return {
		type: Constants.CHANGE_FORMAT_STUDY_DEV,
		format, text
	};
}

export function changeBuisnes(buisnes, text) {
	return {
		type: Constants.CHANGE_BUISNES_STUDY_DEV,
		buisnes, text
	};
}

export function changeRegion(region) {
	return {
		type: Constants.CHANGE_REGION_STUDY_DEV,
		region
	};
}

export function handleChangePurpose(purpose) {
	return {
		type: Constants.CHANGE_PURPOSE_STUDY_DEV,
		purpose
	};
}

export function handleChangeResult(result) {
	return {
		type: Constants.CHANGE_RESULT_STUDY_DEV,
		result
	};
}

export function handleChangeNumber(number) {
	return {
		type: Constants.CHANGE_NUM_STUDY_DEV,
		number
	};
}

export function handleChangePositions(positions) {
	return {
		type: Constants.CHANGE_POSITIONS_STUDY_DEV,
		positions
	};
}

export function handleUpdateStartDate(startDate){
	return {
		type: Constants.UPDATE_START_DATE_STUDY_DEV,
		startDate
	};
}

export function handleUpdateEndDate(endDate){
	return {
		type: Constants.UPDATE_END_DATE_STUDY_DEV,
		endDate
	};
}

export function handleAddComment(comment) {
	return {
		type: Constants.ADD_COMMENT_STUDY_DEV,
		comment
	};
}

export function handleChangePredTest(predTest) {
	return {
		type: Constants.CHANGE_PRED_TEST_STUDY_DEV,
		predTest
	};
}

export function handleChangePostTest(postTest) {
	return {
		type: Constants.CHANGE_POST_TEST_STUDY_DEV,
		postTest
	};
}

export function handleChangeProfile(profile) {
	return {
		type: Constants.CHANGE_PROFILE_STUDY_DEV,
		profile
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS
	};
}

function getSuccess(answer) {
	return {
		type: Constants.GET_REGIONS_STUDY_DEV,
		...answer
	};
}

export function getRegions() {
	return  dispatch => {
		get(obj.url.createPath({ server_name: 'studyDevelop', action_name: 'Regions' }))
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
