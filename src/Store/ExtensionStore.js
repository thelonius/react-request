import AppDispatcher from '../Dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import Constants from '../Constants';
import extend from 'extend';
import Extension from '../Models/Extension';

const Data = {};

Data.status = '';
Data.error = '';
Data.data = {};
Data.ext = new Extension();
Data.reason = '';
Data.date = new Date();
Data.item = null;

const ExtensionStore = extend({}, EventEmitter.prototype, {

	getData() {
		return Data.data;
	},

	getItem() {
		return Data.item;
	},

	getDate() {
		return Data.date;
	},

	getReason() {
		return Data.reason;
	},

	getExtension(){
		return Data.ext;
	},

	getStatus() {
		return Data.status;
	},

	getError() {
		return Data.error;
	},

	check() {
		Data.reason = Data.reason.trim();
		if (Data.item !== null && Data.reason !== '' && Data.date > new Date()) {
			Data.ext = new Extension(Data.item, Data.reason, Data.date);
			return false;
		}
		return true;
	},

	emitChange() {
		this.emit('change');
	},

	addChangeListener(callBack) {
		this.on('change', callBack);
	},

	removeChangeListener(callBack) {
		this.removeListener('change', callBack);
	}
});

function sendDataSuccess() {
	Data.status = 'success';
}

function sendDataError(error) {
	Data.status = 'error';
	Data.error = error;
}

function rejectStatus() {
	Data.status = '';
}

ExtensionStore.dispatchToken = AppDispatcher.register((payload) => {
	const action = payload.action;

	switch (action.actionType) {

		case Constants.SEND_DATA_SUCCESS:
			sendDataSuccess();
			break;

		case Constants.SEND_DATA_ERROR:
			sendDataError(action.error);
			break;

		case Constants.REJECT_STATUS:
			rejectStatus();
			break;

		case Constants.UPDATE_DATE:
			Data.date = new Date(action.date);
			break;

		case Constants.UPDATE_REASON:
			Data.reason = action.reason;
			break;

		case Constants.GET_DATA:
			Data.data = action.data;
			break;

		case Constants.UPDATE_ITEM:
			Data.item = action.item;
			break;
		default: break;
	}

	ExtensionStore.emitChange();
	return true;
});

export default ExtensionStore;