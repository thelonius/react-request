import { connect } from 'react-redux';
import * as action from '../Action/ExclusionCollabAction';
import ExclusionCollab from '../Component/ExclusionCollab.jsx';

function mapStateToProps(state) {
	const { exclusionCollabReducer } = state;

	return {
		...exclusionCollabReducer
	};
}

export default connect(mapStateToProps, action)(ExclusionCollab);
