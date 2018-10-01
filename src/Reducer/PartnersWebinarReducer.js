import Constants from '../Constant/PartnersWebinarConstants';

function postSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		webinarName: '',
		startDate: new Date().toISOString(),
		startTime: '',
		endTime: '',
		tutor: '',
		numCollab: '',
		video: false,
		chat: false
	});
}

export default function PartnersWebinarAction(state = {
	webinarName: '',
	startDate: new Date().toISOString(),
	startTime: '',
	endTime: '',
	tutor: '',
	numCollab: '',
	video: false,
	chat: false,
	status: '',
	error: ''
}, action) {
	switch (action.type) {

		case Constants.ACTION_SUCCESS:
			return postSuccess(state);

		case Constants.POST_DATA_ERROR:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS:
			return Object.assign({}, state, { status: '', error: '' });

		case Constants.UPDATE_START_DATE_PART_WEB:
			return Object.assign({}, state, { startDate: action.startDate });

		case Constants.CHANGE_WEB_NAME_PART_WEB:
			return Object.assign({}, state, { webinarName: action.name });

		case Constants.CHANGE_START_TIME_PART_WEB:
			return Object.assign({}, state, { startTime: action.startTime });

		case Constants.CHANGE_END_TIME_PART_WEB:
			return Object.assign({}, state, { endTime: action.endTime });

		case Constants.CHANGE_TUTOR_PART_WEB:
			return Object.assign({}, state, { tutor: action.tutor });

		case Constants.CHANGE_NUMBER_PART_WEB:
			return Object.assign({}, state, { numCollab: action.number });

		case Constants.CHANGE_VIDEO_PART_WEB:
			return Object.assign({}, state, { video: action.video });

		case Constants.CHANGE_CHAT_PART_WEB:
			return Object.assign({}, state, { chat: action.chat });

		case Constants.REJECT_STATUS_PART_WEB:
			return Object.assign({}, state, { status: '', error: '' });

		default: return state;
	}
}
