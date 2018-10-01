import { connect } from 'react-redux';
import * as action from '../Action/AddLibMaterialAction';
import AddLibMaterial from '../Component/AddLibMaterial.jsx';


function mapStateToProps(state) {
	const { addLibMaterialReducer } = state;

	return {
		...addLibMaterialReducer
	};
}

export default connect(mapStateToProps, action)(AddLibMaterial);
