import React from 'react';
import './style/request-info.scss';
import cx from 'classnames';
import { TextView, TextAreaView } from '../../text-label';
import ButtonPrimary from '../../action-button';
import { AlertDanger, AlertSuccess } from '../../alert';

class RequestInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    handleActionRequest(code) {
    	this.props.actionRequest(this.props.id, code);
    }

    handleBack() {
    	window.location.hash = `/`;
    	this.props.rejectInfo();
    }

    render() {
        const {requestInfo, requestAction, error, status} = this.props;

        return (
            <div className='request-info'>
                <div className='container-title'>
                	<span className='icon-left-open-big container-title_icon' onClick={this.handleBack.bind(this)}></span>
                    <span className='container-title_title'>Информация</span>
                </div>
                <div className='container-info'>
                { status === 'error' && <AlertDanger onClose={this.props.handleRejectStatus} text={error} /> }
								{ status === 'success' && <AlertSuccess onClose={this.props.handleRejectStatus} text={error} /> }
                    {requestInfo.map((info, index) => {
                    	if (info.id && info.id != ' ') {
                    		return (
	                        	<div className='container-info__block' key={index}>
		                        	<span className='container-info__block_title'>{info.title}:</span><br/>
		                        	<a href={'http://study.merlion.ru/view_doc.html?mode=collaborator&object_id=' + info.id}><span className='container-info__block_value'>{info.value}</span></a><br/>
	                        	</div>
	                        )
                    	} else {
	                        return (
	                        	<div className='container-info__block' key={index}>
		                        	<span className='container-info__block_title'>{info.title}:</span><br/>
		                        	<span className='container-info__block_value'>{info.value}</span><br/>
	                        	</div>
	                        )
	                    }
                    })}
                </div>
                <div className='container-action'>
                	{requestAction.map((action, index) => {
                		return (
                			<ButtonPrimary text={action.name} reverse={true} className='container-action_button' key={index} action={this.handleActionRequest.bind(this)} code={action.code}/>
                		)
                	})}
				</div>
            </div>
        )
    }
}

export default RequestInfo;
