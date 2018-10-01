import React from 'react';
import { TextAreaView } from '../components/modules/text-label';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import SelectOneItem from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';

class ExtensionView extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	sendData() {
		const { selectedItem, reason, date } = this.props;

		this.props.sendData({ item: selectedItem, reason: reason, date: date });
	}

	render() {
		const { data, selectedItem, reason, date, status, error } = this.props;
		const disabled = (selectedItem !== null && reason.trim() !== '' && date > new Date()) ? false : true;

		return (
			<div className='ext'>
				<div className='ext__title-container'>
					<span className='icon-left-open-big ext__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className='ext__title-container__title'>Заявка на продление адаптации</span>
				</div>
				<div className='ext__container'>
					{ status === 'error' && <AlertDanger handleOnClose={this.props.rejectStatus} text={error} /> }
					{ status === 'success' && <AlertSuccess handleOnClose={this.props.rejectStatus} text={'Заявка отправлена'} /> }
					<SelectOneItem
						{...data}
						selectedItem={selectedItem}
						onClick={this.props.getData.bind(this)}
						onSave={this.props.updateItem.bind(this)}
						title={'Выберите сотрудника'}
						changedQuary={this.props.getData.bind(this)}
						placeholder={'Cотрудник'}
					/>
					<TextAreaView
						className='ext__reason'
						value={reason}
						onChange={this.props.updateReason.bind(this)}
						placeholder={'Обоснование'}
					/>
					<InputCalendar placeholder={'Дата, по которую необходимо продлить адаптацию'} onSave={this.props.updateDate.bind(this)} date={date}/> <br/>
					<ButtonPrimary className='submit' text={'Подать заявку'} disabled={disabled}
						onClick={this.sendData.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default ExtensionView;
