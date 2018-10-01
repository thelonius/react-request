import React from 'react';
import { TextView } from '../components/modules/text-label';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import SelectOneItem from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import '../../style/exclusionCollab.scss';

class ExclusionCollab extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	sendData() {
		const { selectedItem, reason } = this.props;

		this.props.sendData({ item: selectedItem, reason: reason });
	}

	render() {
		const { data, selectedItem, reason } = this.props;
		const disabled = (selectedItem !== null && reason.trim() !== '') ? false : true;

		return (
			<div className='exclusion'>
				<div className='exclusion__title-container'>
					<span className='icon-left-open-big exclusion__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className='exclusion__title-container__title'>Заявка на исключение сотрудника из отчета по адаптации</span>
				</div>
				<div className='exclusion__container'>
					<SelectOneItem
						className='left-block'
						{...data}
						selectedItem={selectedItem}
						onClick={this.props.getData.bind(this)}
						onSave={this.props.updateItem.bind(this)}
						title={'Выберите сотрудника'}
						changedQuary={this.props.getData.bind(this)}
						placeholder={'Cотрудник'}
					/>
					<TextView
						className='right-block'
						value={reason}
						onChange={this.props.updateReason.bind(this)}
						placeholder={'Обоснование'}
					/>
					<ButtonPrimary className='submit' text={'Подать заявку'} disabled={disabled}
						onClick={this.sendData.bind(this)}
					/>
					<div className='exclusion__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default ExclusionCollab;
