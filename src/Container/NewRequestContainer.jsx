import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as action from '../Action/RequestInfoAction';
import NewRequest from '../components/modules/choose-new-request';

class NewRequestContainer extends Component {

	componentDidMount(){
		this.props.handleGetNewRequests();
	}

	render() {
		const { requestNameFilter } = this.props;

		return (
			<div>
				{ requestNameFilter && <NewRequest {...this.props}/> }
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { newRequestReducer } = state;

	return {
		...newRequestReducer
	};
}

export default connect(mapStateToProps, action)(NewRequestContainer);