import React, {Component} from 'react';
import cx from 'classnames';

import './style/button.scss';

class ButtonPrimary extends Component {
	
	constructor(props) {
		super(props);
	}
	
	handleAction() {
		this.props.action(this.props.code);
	}
	
	render() {
		const {text} = this.props;
	    const classes = cx({
	        'button-default--primary': true,
	        'button-default--primary--reverse': this.props.reverse,
	        'button-default': true
	    }, this.props.className);
    
    	return (
    		<button className={classes}  onClick={this.handleAction.bind(this)}>{this.props.text}</button>
    	)
    }
}

export default ButtonPrimary;