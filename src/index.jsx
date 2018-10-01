/*
import 'babel-polyfill';
import './styles';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import { getAccess } from './actions';
import thunk from 'redux-thunk';
import App from './containers/App';
import config from './config';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

store.dispatch(getAccess());

const routes = <Route path="/" component={App}/>;

ReactDOM.render(
	<Provider store={store}>
 		<Router history={hashHistory}>{routes}</Router>
 	</Provider>,
	document.getElementById(config.dom.appId)
);
*/
import RequestContainer from './Container/RequestContainer.jsx';
import InternalStudy from './Container/InternalStudyContainer.jsx';
import RequestInfo from './Container/RequestInfoContainer.jsx';
import NewRequest from './Container/NewRequestContainer.jsx';
import StudyDevelopment from './Container/StudyDevelopmentContainer.jsx';
import Extension from './Container/ExtensionContainer.jsx';
import PurposeTest from './Container/PurposeTestContainer.jsx';
import EnterTestResult from './Container/EnterTestContainer.jsx';
import PurposeCourse from './Container/PurposeCourseContainer.jsx';
import NewAdaptStart from './Container/NewAdaptStartContainer.jsx';
import ExclusionCollab from './Container/ExclusionCollabContainer.jsx';
import TransferMaterial from './Container/TransferMaterialContainer.jsx';
import AddProgramm from './Container/AddProgrammContainer.jsx';
import NotificationEvent from './Container/NotificationEventContainer.jsx';
import PartnersWebinar from './Container/PartnersWebinarContainer.jsx';
import TrainingPrograms from './Container/TrainingProgramsContainer.jsx';
import AddLibMaterial from './Container/AddLibMaterialContainer.jsx';
import VendorStudy from './Container/VendorStudyContainer.jsx';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import reducer from './Reducer/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './styles';
import 'babel-polyfill';

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

const div = document.getElementById('requests');

try {
	render(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path='/' component={RequestContainer} />
				<Route path='/internal_study' component={InternalStudy}/>
				<Route path='/requests/:id' component={RequestInfo}/>
				<Route path='/newrequests' component={NewRequest}/>
				<Route path='/study_develop' component={StudyDevelopment}/>
				<Route path='/ext_adaptation' component={Extension}/>
				<Route path='/purpose_test' component={PurposeTest}/>
				<Route path='/enter_test_result' component={EnterTestResult}/>
				<Route path='/purpose_course' component={PurposeCourse}/>
				<Route path='/new_adapt_start' component={NewAdaptStart}/>
				<Route path='/exclusion_collab' component={ExclusionCollab}/>
				<Route path='/transfer_material' component={TransferMaterial}/>
				<Route path='/add_programm' component={AddProgramm}/>
				<Route path='/notification_event' component={NotificationEvent}/>
				<Route path='/partners_web' component={PartnersWebinar}/>
				<Route path='/training_prog' component={TrainingPrograms}/>
				<Route path='/add_material' component={AddLibMaterial}/>
				<Route path='/vendor_study' component={VendorStudy}/>
			</Router>
		</Provider>,
		div
	);
} catch (e) {
	console.log(e);
}
