import React from 'react';
import SelectItems from '../../select-items';
import cx from 'classnames';
import './style/select-one-item.scss';

class SelectOneItem extends React.Component {

	constructor(props){
		super(props);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleShowModal = this.handleShowModal.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.state = {
			isShowModal: false,
			selectedItem: props.selectedItem,
		}
	}

	static propTypes = {
		modalTitle: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		query: React.PropTypes.string,
		onSave: React.PropTypes.func,
		selectedItem: React.PropTypes.object,
		onClick: React.PropTypes.func
	}

	componentWillReceiveProps(nextProps){
		this.setState({selectedItem: nextProps.selectedItem});
	}

	getModal(){
		let selectedItem = this.state.selectedItem ? [this.state.selectedItem] : null;
		const maxSelectedItem = this.props.maxSelectedItems ? this.props.maxSelectedItems : 1;
		return this.state.isShowModal ?
			<SelectItems
				{...this.props}
				selectedItems={selectedItem}
				maxSelectedItems={maxSelectedItem}
				onClose={this.handleCloseModal}
				onSave={this.handleSave}
				changedQuary={this.props.onClick}
			/> : null;
	}

	getItemValue(){
		let data = this.props.selectedItem ? this.props.selectedItem.data: null;
		return data ? data[Object.keys(data)[0]] : '';
	}

	handleSave(items) {
		let item = null;
		if (items.length === 1){
			item = items[0];
		}
		if (this.props.onSave){
			this.props.onSave(item);
		}
		this.handleCloseModal();
	}

	handleCloseModal(){
		this.setState({isShowModal: false});
	}

	handleShowModal(){
		this.setState({isShowModal: true});
		if (this.props.onClick) {
			this.props.onClick(1, '');
		}
	}

	render() {
		const inputClasses = cx({
			'select-one-item__input': true,
			'select-one-item__input_not-empty': this.props.selectedItem
		});
		const iconClasses = cx({
			'icon-popup': true,
			'select-one-item__icon': true,
			'select-one-item__icon--up': this.props.selectedItem
		});
		const val = this.getItemValue();
		return (
			<div className={cx('select-one-item-container', this.props.className)}>
				<div className='select-one-item'>
					<input
						readOnly
						className={inputClasses}
						type="text"
						value={val}
						title={val}
						onClick={this.handleShowModal}
						onChange={this.handleChange}/>
	                <label className="select-one-item__label">{this.props.placeholder}</label>
	                <i className={iconClasses} onClick={this.handleShowModal}></i>
	            </div>
	            {this.getModal()}
			</div>
		);
	}
};

export default SelectOneItem;
