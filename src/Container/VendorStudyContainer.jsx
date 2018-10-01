import { connect } from 'react-redux';
import * as action from '../Action/VendorStudyAction';
import VendorStudy from '../Component/VendorStudy.jsx';

function mapStateToProps(state) {
	const { vendorStudyReducer } = state;

	return {
		...vendorStudyReducer
	};
}

export default connect(mapStateToProps, action)(VendorStudy);
