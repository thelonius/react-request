import Constants from '../Constant/TrainingProgramsConstants';

function postSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		startDate: new Date().toISOString(),
		startTime: '',
		endTime: '',
		trainingProgram: null,
		selectedPayload: 0,
		town: '',
		positions: '',
		comment: '',
		place: ''
	});
}

export default function PartnersWebinarAction(state = {
	status: '',
	startDate: new Date().toISOString(),
	startTime: '',
	endTime: '',
	trainingProgram: null,
	programs: {},
	items: [ { payload: 0, text: 'Форма обучения' }, { payload: 1, text: 'Вебинар' }, { payload: 2, text: 'Очное' } ],
	selectedPayload: 0,
	form: '',
	town: '',
	positions: '',
	comment: '',
	place: ''
}, action) {
	switch (action.type) {

		case Constants.ACTION_SUCCESS:
			return postSuccess(state);

		case Constants.POST_DATA_ERROR:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS:
			return Object.assign({}, state, { status: '', error: '' });

		case Constants.UPDATE_START_DATE_TR_PROG:
			return Object.assign({}, state, { startDate: action.startDate });

		case Constants.GET_SUCCESS_TR_PROG:
			return Object.assign({}, state, { programs: action.answer });

		case Constants.CHANGE_START_TIME_TR_PROG:
			return Object.assign({}, state, { startTime: action.startTime });

		case Constants.CHANGE_END_TIME_TR_PROG:
			return Object.assign({}, state, { endTime: action.endTime });

		case Constants.CHANGE_PROG_TR_PROG:
			return Object.assign({}, state, { trainingProgram: action.program });

		case Constants.CHANGE_FORM_TR_PROG:
			return Object.assign({}, state, { selectedPayload: action.payload, form: action.text });

		case Constants.CHANGE_TOWN_TR_PROG:
			return Object.assign({}, state, { town: action.town });

		case Constants.CHANGE_COMMENT_TR_PROG:
			return Object.assign({}, state, { comment: action.comment });

		case Constants.REJECT_STATUS_TR_PROG:
			return Object.assign({}, state, { status: '', error: '' });

		case Constants.UPDATE_POSITIONS_TR_PROG:
			return Object.assign({}, state, { positions: action.positions });

		case Constants.UPDATE_PLACE_TR_PROG:
			return Object.assign({}, state, { place: action.place });

		default: return state;
	}
}
