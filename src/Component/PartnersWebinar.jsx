import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import { TextView } from '../components/modules/text-label';
import CheckBox from '../components/modules/new-checkbox';
import InputCalendar from '../components/modules/input-calendar';
import '../../style/partnersWebinar.scss';

class PartnersWebinar extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	handlePost() {
		this.props.submit({ ...this.props	});
	}

	checkTime(time) {
		return (/^[0-2][0-9]:[0-5]\d$/.test(time));
	}

	checkCollab(number) {
		return (/^\d{1,}$/.test(number));
	}

	render() {
		const disabled = (this.props.webinarName !== '' && new Date(this.props.startDate) > new Date() && this.props.startTime !== '' && this.props.endTime !== '' && this.props.tutor !== '' && this.props.numCollab !== '') ? false : true;

		return (
			<div className = 'partners-webinar-request'>
				<div className = 'partners-webinar-request__title-container'>
					<span className='icon-left-open-big partners-webinar-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'partners-webinar-request__title-container__title'>Заявка на организацию вебинара для партнеров</span>
				</div>
				<div className = 'partners-webinar-request__container'>
					<div className='left-block'>
						<TextView
							placeholder={'Название вебинара'}
							value={this.props.webinarName}
							onChange={this.props.handleWebinarName}
						/>
						<InputCalendar
							placeholder={'Дата проведения'}
							onSave = {this.props.handleUpdateStartDate}
							date = {this.props.startDate}
						/>
						<TextView
							className='start-time'
							placeholder={'Время начала(ЧЧ:ММ)'}
							value={this.props.startTime}
							onChange={this.props.handleStartTime}
							isValid={this.checkTime.bind(this)}
						/>
						<TextView
							className='end-time'
							placeholder={'Время завершения(ЧЧ:ММ)'}
							value={this.props.endTime}
							onChange={this.props.handleEndTime}
							isValid={this.checkTime.bind(this)}
						/>
					</div>
					<div className='right-block'>
						<TextView
							placeholder={'Преподаватель'}
							value={this.props.tutor}
							onChange={this.props.handleChangeTutor}
						/>
						<TextView
							placeholder={'Максимальное количество участников(цифрой)'}
							value={this.props.numCollab}
							onChange={this.props.handleChangeNumCollab}
							isValid={this.checkCollab.bind(this)}
						/>
						<CheckBox
							className='checkbox'
							label={'Необходима ли запись видео'}
							checked={this.props.video}
							onChange={this.props.handleChangeVideo}
						/><br/>
						<CheckBox
							className='checkbox'
							label={'Необходима ли запись чата'}
							checked={this.props.chat}
							onChange={this.props.handleChangeChat}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled={disabled}
						onClick={this.handlePost.bind(this)}
					/>
					<div className = 'partners-webinar-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default PartnersWebinar;
