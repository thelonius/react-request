import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as action from '../Action/RequestInfoAction';
import RequestInfo from '../components/modules/request-info';

class RequestInfoContainer extends Component {

	componentDidMount(){
		this.props.handleGetRequestInfo(this.props.params.id);
	}

	render() {
		const { id } = this.props;

		return (
			<div>
				{ id && <RequestInfo {...this.props}/> }
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { requestInfoReducer } = state;

	return {
		...requestInfoReducer
	};
}

export default connect(mapStateToProps, action)(RequestInfoContainer);