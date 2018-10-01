import { connect } from 'react-redux';
import * as action from '../Action/NotificationEventAction';
import NotificationEvent from '../Component/NotificationEvent.jsx';

function mapStateToProps(state) {
	const { notificationEventReducer } = state;

	return {
		...notificationEventReducer
	};
}

export default connect(mapStateToProps, action)(NotificationEvent);
