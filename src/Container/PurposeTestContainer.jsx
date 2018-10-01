import { connect } from 'react-redux';
import * as action from '../Action/PurposeTestAction';
import PurposeTest from '../Component/PurposeTest.jsx';


function mapStateToProps(state) {
	const { purposeTestReducer } = state;

	return {
		...purposeTestReducer
	};
}

export default connect(mapStateToProps, action)(PurposeTest);
