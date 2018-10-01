import { connect } from 'react-redux';
import * as action from '../Action/EditAction';
import InternalStudyView from '../Component/InternalStudyView.jsx';


function mapStateToProps(state) {
	const { internalStudyReducer } = state;

	return {
		...internalStudyReducer
	};
}

export default connect(mapStateToProps, action)(InternalStudyView);
