import { connect } from 'react-redux';
import * as action from '../Action/TrainingProgramsAction';
import TrainingPrograms from '../Component/TrainingPrograms.jsx';

function mapStateToProps(state) {
	const { trainingProgramsReducer } = state;

	return {
		...trainingProgramsReducer
	};
}

export default connect(mapStateToProps, action)(TrainingPrograms);
