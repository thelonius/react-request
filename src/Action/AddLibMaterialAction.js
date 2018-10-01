import Constants from '../Constant/AddLibMaterialConstants';
import { get } from '../utils/ajax';
import obj from '../config';

function getError(error) {
	return {
		type: Constants.GET_ERROR_ADD_MATER,
		error
	};
}

function getSectionsSuccess(answer) {
	return {
		type: Constants.GET_SECTIONS_SUCCESS_ADD_MATER,
		answer
	};
}

export function handleSaveSection(section) {
	return {
		type: Constants.SELECT_SECTION_ADD_MATER,
		section
	};
}

export function handleGetSections(page, search) {
	return dispatch => {
		get(obj.url.createPath({ server_name: 'addMaterial', action_name: 'Sections', page: page, search: search }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getSectionsSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}

export function updateBusinessType(business){
	return {
		type: Constants.UPDATE_BUSINESS_ADD_MATER,
		business
	};
}

export function handleUpdateMaterialName(name){
	return {
		type: Constants.UPDATE_MATER_NAME_ADD_MATER,
		name
	};
}


export function handleMaterialCode(e, payload, text){
	return {
		type: Constants.UPDATE_CODE_ADD_MATER,
		payload, text
	};
}

export function handleMaterialType(e, payload, text){
	return {
		type: Constants.UPDATE_TYPE_ADD_MATER,
		payload, text
	};
}

export function handleOrientation(e, payload, text){
	return {
		type: Constants.UPDATE_ORIENTATION_ADD_MATER,
		payload, text
	};
}

export function handleDownload(e, payload, text){
	return {
		type: Constants.UPDATE_DOWNLOAD_ADD_MATER,
		payload, text
	};
}

export function handleUpdateAuthor(author) {
	return {
		type: Constants.UPDATE_AUTHOR_ADD_MATER,
		author
	};
}

export function handleRejectStatus() {
	return {
		type: Constants.REJECT_STATUS_ADD_MATER
	};
}

export function rejectData() {
	return {
		type: Constants.REJECT_DATA_ADD_MATER
	};
}

function getMaterialTypeSuccess(answer) {
	return {
		type: Constants.GET_MATERIAL_TYPE_ADD_MATER,
		...answer
	};
}

export function getMaterialType() {
	return dispatch => {
		get(obj.url.createPath({ server_name: 'addMaterial', action_name: 'MaterialType' }))
		.then(answer => JSON.parse(answer))
		.then(answer => {
			if (answer.error) {
				dispatch(getError(answer.error));
			} else {
				dispatch(getMaterialTypeSuccess(answer));
			}
		}).catch(e => {
			dispatch(getError(e.message));
		});
	};
}
