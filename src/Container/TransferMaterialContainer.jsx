import { connect } from 'react-redux';
import * as action from '../Action/TransferMaterialAction';
import TransferMaterial from '../Component/TransferMaterial.jsx';

function mapStateToProps(state) {
	const { transferMaterialReducer } = state;

	return {
		...transferMaterialReducer
	};
}

export default connect(mapStateToProps, action)(TransferMaterial);
