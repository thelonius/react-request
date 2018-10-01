import { connect } from 'react-redux';
import * as action from '../Action/AddProgrammAction';
import AddProgramm from '../Component/AddProgramm.jsx';


function mapStateToProps(state) {
	const { addProgrammReducer } = state;

	return {
		...addProgrammReducer
	};
}

export default connect(mapStateToProps, action)(AddProgramm);
