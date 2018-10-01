import { connect } from 'react-redux';
import * as action from '../Action/NewAdaptStartAction';
import NewAdaptStart from '../Component/NewAdaptStart.jsx';


function mapStateToProps(state) {
	const { newAdaptStartReducer } = state;

	return {
		...newAdaptStartReducer
	};
}

export default connect(mapStateToProps, action)(NewAdaptStart);
