import { connect } from 'react-redux';
import * as action from '../Action/ExtAdaptAction';
import ExtensionView from '../Component/ExtensionView.jsx';

function mapStateToProps(state) {
	const { extensionReducer } = state;

	return {
		...extensionReducer
	};
}

export default connect(mapStateToProps, action)(ExtensionView);
