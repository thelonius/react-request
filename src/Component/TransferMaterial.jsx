import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import SelectOneItem from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import '../../style/transferMaterial.scss';

class TransferMaterial extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	sendData() {
		const { selectedItem } = this.props;

		this.props.sendData({ item: selectedItem });
	}

	render() {
		const { data, selectedItem } = this.props;
		const disabled = (selectedItem !== null) ? false : true;

		return (
			<div className='transfer'>
				<div className='transfer__title-container'>
					<span className='icon-left-open-big transfer__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className='transfer__title-container__title'>Заявка на перенос материала в архив</span>
				</div>
				<div className='transfer__container'>
					<SelectOneItem
						className='transfer__collab'
						{...data}
						selectedItem={selectedItem}
						onClick={this.props.getData.bind(this)}
						onSave={this.props.updateItem.bind(this)}
						title={'Выберите материал'}
						changedQuary={this.props.getData.bind(this)}
						placeholder={'Материал'}
					/>
					<ButtonPrimary
						className='submit'
						text={'Подать заявку'}
						disabled={disabled}
						onClick={this.sendData.bind(this)}
					/>
					<div className='transfer__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default TransferMaterial;
