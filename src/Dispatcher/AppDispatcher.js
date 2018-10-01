import {Dispatcher} from 'flux';

var AppDispacher = new Dispatcher();

AppDispacher.handleAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
}

export default AppDispacher;