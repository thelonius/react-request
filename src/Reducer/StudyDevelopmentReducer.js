import Constants from '../Constant/StudyDevelopmentConst';

export default function StudyDevelopmentReducer(state = {
	thematics:[
	{ payload: 0, text: 'Тематика обучения' }, { payload: 1, text: 'Продажи' },
	{ payload: 2, text: 'Закупки' }, { payload: 3, text: 'IT' }, { payload: 4, text: 'Управленческие навыки' },
	{ payload: 5, text: 'Коммуникация и взаимодействие' }, { payload: 6, text: 'Развитие личности' } ],
	thematic: 'Тематика обучения',
	selectedThematic: 0,
	formats: [ { payload: 0, text: 'Формат обучения' }, { payload: 1, text: 'Очный' }, { payload: 2, text: 'Дистанционный' } ],
	format: 'Формат обучения',
	selectedFormat: 0,
	buisnesTypes: [ { payload: 0, text: 'Вид бизнеса' }, { payload: 1, text: 'MERLION' }, { payload: 2, text: 'CITILINK' } ],
	buisnes: 'Вид бизнеса',
	selectedBuisnes: 0,
	trainingPurpose: '',
	trainingResult: '',
	numWorkers: '',
	positions: '',
	startDate: new Date(),
	endDate: new Date(),
	comment: '',
	predTest: false,
	postTest: false,
	profile: false,
	status: '',
	error: '',
	regions: [ { payload: 0, text: 'Регион' } ],
	selectedRegion: 0
}, action) {
	switch (action.type) {

		case Constants.ACTION_SUCCESS:
			return Object.assign({}, state, { status: 'success' });

		case Constants.POST_DATA_ERROR:
			return Object.assign({}, state, { status: 'error', error: action.error });

		case Constants.REJECT_STATUS:
			return Object.assign({}, state, { status: '', error: '' });

		case Constants.CHANGE_THEMATIC_STUDY_DEV:
			return Object.assign({}, state, { selectedThematic: action.thematic, thematic: action.text });

		case Constants.CHANGE_FORMAT_STUDY_DEV:
			return Object.assign({}, state, { selectedFormat: action.format, format: action.text });

		case Constants.CHANGE_BUISNES_STUDY_DEV:
			return Object.assign({}, state, { selectedBuisnes: action.buisnes, buisnes: action.text });

		case Constants.CHANGE_REGION_STUDY_DEV:
			return Object.assign({}, state, { selectedRegion: action.region });

		case Constants.CHANGE_PURPOSE_STUDY_DEV:
			return Object.assign({}, state, { trainingPurpose: action.purpose.trim() });

		case Constants.CHANGE_RESULT_STUDY_DEV:
			return Object.assign({}, state, { trainingResult: action.result.trim() });

		case Constants.CHANGE_NUM_STUDY_DEV:
			return Object.assign({}, state, { numWorkers: action.number.trim() });

		case Constants.CHANGE_POSITIONS_STUDY_DEV:
			return Object.assign({}, state, { positions: action.positions.trim() });

		case Constants.UPDATE_START_DATE_STUDY_DEV:
			return Object.assign({}, state, { startDate: action.startDate });

		case Constants.UPDATE_END_DATE_STUDY_DEV:
			return Object.assign({}, state, { endDate: action.endDate });

		case Constants.ADD_COMMENT_STUDY_DEV:
			return Object.assign({}, state, { comment: action.comment.trim() });

		case Constants.CHANGE_PRED_TEST_STUDY_DEV:
			return Object.assign({}, state, { predTest: action.predTest });

		case Constants.CHANGE_POST_TEST_STUDY_DEV:
			return Object.assign({}, state, { postTest: action.postTest });

		case Constants.CHANGE_PROFILE_STUDY_DEV:
			return Object.assign({}, state, { profile: action.profile });

		case Constants.GET_REGIONS_STUDY_DEV:
			return Object.assign({}, state, { regions: state.regions.concat(action.regions) });

		default: return state;
	}
}