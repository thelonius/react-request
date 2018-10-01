import React from 'react';
import './style/pages.scss';
import cx from 'classnames';

var Pages = React.createClass({

	propTypes: {
		value: React.PropTypes.number,
		onChange: React.PropTypes.func
	},

	getInitialState: function() {
		return {
			value: this.props.value
		}
	},

	getDefaultProps() {
		return {
			value: 1,
			pagesCount: 1,
			isValid(val){
				return /^[1-9]{1,}(\d+)?$/.test(val) && Number(val) >= 1;
			}
		}
	},

	componentWillReceiveProps(nextProps){
		this.setState({value: nextProps.value});
	},

	_changePage(val){
		if (this.props.onBlur){
			this.props.onBlur(val);
		}
	},

	handleChangeDecrementPage(){
		if (this.state.value <= 1) return;
		this._changePage(this.state.value - 1);
	},

	handleChangeIncrementPage(){
		if ((this.state.value + 1) > this.props.pagesCount) return;
		this._changePage(this.state.value + 1);
	},

	handleKeyDown(e){
		if (e.keyCode === 13){
			e.target.blur();
			this._changePage(e.target.value);
		}
	},

	handleChange(e){
		const val = e.target.value;
		const {isValid} = this.props;
		if (isValid(val)){
			this.setState({value: val});
		}
	},

	handleblur(e){
		if (this.props.onChange){
			this.props.onChange(e.target.value);
		}
	},

	render(){
        const classes = cx('pages', this.props.className);

		return (
			<div className={classes}>
				<i className="icon-arrow-left" onClick={this.handleChangeDecrementPage}></i>
				<input 
					ref="page" 
					type="text" 
					className="pages__page" 
					value={this.state.value} 
					onKeyDown={this.handleKeyDown} 
					onBlur={this.handleChange} 
					onChange={this.handleChange}/>
				<span className="pages__pages-count">{this.props.pagesCount}</span>
				<i className="icon-arrow-right" onClick={this.handleChangeIncrementPage}></i>
			</div>
		);
	}
});

export default Pages;