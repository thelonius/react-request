import { connect } from 'react-redux';
import * as action from '../Action/PurposeCourseAction';
import PurposeCourse from '../Component/PurposeCourse.jsx';


function mapStateToProps(state) {
	const { purposeCourseReducer } = state;

	return {
		...purposeCourseReducer
	};
}

export default connect(mapStateToProps, action)(PurposeCourse);
