import React from 'react';
import { TextView } from '../components/modules/text-label';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import SelectOneItem from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import '../../style/notificationEvent.scss';

class NotificationEvent extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	sendData() {
		this.props.sendData({ ...this.props });
	}

	render() {
		const { data, selectedItem, email, date } = this.props;
		const disabled = (selectedItem !== null && email.trim() !== '' && new Date(date) > new Date()) ? false : true;

		return (
			<div className='notification'>
				<div className='notification__title-container'>
					<span className='icon-left-open-big notification__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className='notification__title-container__title'>Заявка на уведомление по мероприятию</span>
				</div>
				<div className='notification__container'>
					<SelectOneItem
						className='left-block'
						{...data}
						selectedItem={selectedItem}
						onClick={this.props.getData.bind(this)}
						onSave={this.props.updateItem.bind(this)}
						title={'Выберите мероприятие'}
						changedQuary={this.props.getData.bind(this)}
						placeholder={'Мероприятие'}
					/>
					<TextView
						className='right-block'
						value={email}
						onChange={this.props.updateReason.bind(this)}
						placeholder={'Почта на которую необходимо отправить уведомление'}
					/>
					<InputCalendar
						placeholder={'Дата отправки'}
						onSave = {this.props.handleUpdateStartDate}
						date = {this.props.date}
					/>
					<ButtonPrimary className='submit' text={'Подать заявку'} disabled={disabled}
						onClick={this.sendData.bind(this)}
					/>
					<div className='notification__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default NotificationEvent;
