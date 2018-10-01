import { connect } from 'react-redux';
import * as action from '../Action/StudyDevelopmentAction';
import StudyDevelopment from '../Component/StudyDevelopment.jsx';

function mapStateToProps(state) {
	const { studyDevelopmentReducer } = state;

	return {
		...studyDevelopmentReducer
	};
}

export default connect(mapStateToProps, action)(StudyDevelopment);
