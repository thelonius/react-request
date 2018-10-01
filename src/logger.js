
function logger(store) {
	return function wrapDispatchToAddLogging(next) {
		return function dispatchAndLog(action) {
			console.log('dispatching', action);
			console.log('next state', store.getState());
			return next(action);
		};
	};
}

export default logger;