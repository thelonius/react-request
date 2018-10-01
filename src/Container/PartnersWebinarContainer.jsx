import { connect } from 'react-redux';
import * as action from '../Action/PartnersWebinarAction';
import PartnersWebinar from '../Component/PartnersWebinar.jsx';

function mapStateToProps(state) {
	const { partnersWebinarReducer } = state;

	return {
		...partnersWebinarReducer
	};
}

export default connect(mapStateToProps, action)(PartnersWebinar);
