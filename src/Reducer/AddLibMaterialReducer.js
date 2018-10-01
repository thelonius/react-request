import Constants from '../Constant/AddLibMaterialConstants';

function sendDataSuccess(state) {
	return Object.assign({}, state, {
		status: 'success',
		error: '',
		form: 'Тип бизнеса',
		selectedBusiness: 0,
		selectedSection: null,
		orgs: {},
		materialName: '',
		author: ''
	});
}

function sendDataError(state, error) {
	return Object.assign({}, state, { status: 'error', error: error });
}

function rejectData(state) {
	return Object.assign({}, state, {
		status: '',
		error: '',
		materialCode: [ { payload: 0, text: 'Код материала' }, { payload: 1, text: 'CITILINK' }, { payload: 2, text: 'MERLION' } ],
		selectedCode: 0,
		code: '',
		materialType: [ { payload: 0, text: 'Тип материала' } ],
		selectedType: 0,
		type: '',
		orientations: [ { payload: 0, text: 'Ориентация' }, { payload: 1, text: 'Вертикальная' }, { payload: 2, text: 'Горизонтальная' } ],
		selectedOrientation: 0,
		orientation: '',
		downloads: [ { payload: 0, text: ' Разрешить скачивание материала' }, { payload: 1, text: 'Да' }, { payload: 2, text: 'Нет' } ],
		selectedDownload: 0,
		download: '',
		selectedSection: null,
		sections: {},
		materialName: '',
		author: ''
	});
}

function rejectStatus(state) {
	return Object.assign({}, state, { status: '' });
}

export default function AddLibMaterialReducer(state = {
	status: '',
	error: '',
	materialCode: [ { payload: 0, text: 'Код материала' }, { payload: 1, text: 'CITILINK' }, { payload: 2, text: 'MERLION' } ],
	selectedCode: 0,
	code: '',
	materialType: [ { payload: 0, text: 'Тип материала' } ],
	selectedType: 0,
	type: '',
	orientations: [ { payload: 0, text: 'Ориентация' }, { payload: 1, text: 'Вертикальная' }, { payload: 2, text: 'Горизонтальная' } ],
	selectedOrientation: 0,
	orientation: '',
	downloads: [ { payload: 0, text: ' Разрешить скачивание материала' }, { payload: 1, text: 'Да' }, { payload: 2, text: 'Нет' } ],
	selectedDownload: 0,
	download: '',
	selectedSection: null,
	sections: {},
	materialName: '',
	author: ''
}, action) {
	switch (action.type) {

		case Constants.SEND_DATA_SUCCESS_ADD_MATER:
			return sendDataSuccess(state);

		case Constants.GET_ERROR_ADD_MATER:
			return sendDataError(state, action.error);

		case Constants.REJECT_STATUS_ADD_MATER:
			return rejectStatus(state);

		case Constants.UPDATE_CODE_ADD_MATER:
			return Object.assign({}, state, { selectedCode: action.payload, code: action.text });

		case Constants.UPDATE_TYPE_ADD_MATER:
			return Object.assign({}, state, { selectedType: action.payload, type: action.text });

		case Constants.UPDATE_ORIENTATION_ADD_MATER:
			return Object.assign({}, state, { selectedOrientation: action.payload, orientation: action.text });

		case Constants.UPDATE_DOWNLOAD_ADD_MATER:
			return Object.assign({}, state, { selectedDownload: action.payload, download: action.text });

		case Constants.GET_SECTIONS_SUCCESS_ADD_MATER:
			return Object.assign({}, state, { sections: action.answer });

		case Constants.SELECT_SECTION_ADD_MATER:
			return Object.assign({}, state, { selectedSection: action.section });

		case Constants.UPDATE_MATER_NAME_ADD_MATER:
			return Object.assign({}, state, { materialName: action.name });

		case Constants.UPDATE_AUTHOR_ADD_MATER:
			return Object.assign({}, state, { author: action.author });

		case Constants.CHANGE_TEST_ADD_MATER:
			return Object.assign({}, state, { test: action.test });

		case Constants.GET_MATERIAL_TYPE_ADD_MATER:
			return Object.assign({}, state, { materialType: state.materialType.concat(action.materialType) });

		case Constants.REJECT_DATA_ADD_MATER:
			return rejectData(state);

		default: return state;
	}
}
