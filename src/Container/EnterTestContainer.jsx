import { connect } from 'react-redux';
import * as action from '../Action/EnterTestResultAction';
import EnterTestResult from '../Component/EnterTestResult.jsx';

function mapStateToProps(state) {
	const { enterTestReducer } = state;

	return {
		...enterTestReducer
	};
}

export default connect(mapStateToProps, action)(EnterTestResult);
