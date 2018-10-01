import { connect } from 'react-redux';
import * as action from '../Action/RequestAction';
import Requests from '../Component/Requests.jsx';


function mapStateToProps(state) {
	const { requestReducer } = state;

	return {
		...requestReducer
	};
}

export default connect(mapStateToProps, action)(Requests);
