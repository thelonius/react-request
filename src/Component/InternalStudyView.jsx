import React from 'react';
import { TextView } from '../components/modules/text-label';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import DropDown from '../components/modules/dropdown';
import '../../style/internalStudy.scss';

class InternalStudyView extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	updateFormName(e, payload, text) {
		this.props.updateFormOfHolding(text);
		this.props.updateSelectedPayload(payload);
	}

	sendData() {
		const { eventName, startDate, endDate, form, division, subdivision, positions, managersName } = this.props;

		this.props.sendData({ eventName: eventName, startDate: startDate, endDate: endDate, form: form, division: division, subdivision: subdivision, positions: positions, managersName: managersName });
		this.props.rejectData();
	}

	render() {
		const { eventName, startDate, endDate, status, error, division, subdivision, positions, managersName, items, selectedPayload, form } = this.props;
		const disabled = (eventName !== '' && startDate > new Date() && endDate > new Date() && startDate < endDate && form !== 'Формат обучения' &&
		subdivision !== '' && positions !== '' && managersName !== '' && division !== '') ? false : true;

		return (
			<div className = 'inernal-study-request'>
				<div className = 'inernal-study-request__title-container'>
					<span className='icon-left-open-big inernal-study-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'inernal-study-request__title-container__title'>Заявка на проведение внутреннего обучения</span>
				</div>
				<div className = 'inernal-study-request__container'>
					{status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={error} />}
					{status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					<div className = 'left-block'>
						<div className='audience'>Данные мероприятия:</div>
						<TextView
							value = {eventName}
							onChange = {this.props.handleUpdateEventName}
							placeholder = {'Название мероприятия'}
						/>
						<InputCalendar
							placeholder={'Дата и время начала проведения обучения'}
							onSave = {this.props.handleUpdateStartDate}
							date = {startDate}
						/>
						<InputCalendar
							placeholder={'Дата и время завершения проведения обучения'}
							onSave = {this.props.handleUpdateEndDate}
							date = {endDate}
						/>
						<DropDown
							items = {items}
							onChange = {this.updateFormName.bind(this)}
							selectedPayload = {selectedPayload}
							className = {'format'}
							deviders={[ 1 ]}
							placeholder={'Формат проведения'}
						/>
					</div>
					<div className = 'right-block'>
						<div className='audience'>Целевая аудитория:</div>
						<TextView
							value = {division}
							onChange = {this.props.updateDivision.bind(this)}
							placeholder={'Дивизионы'}
						/>
						<TextView
							value = {subdivision}
							onChange = {this.props.updateSubdivision.bind(this)}
							placeholder={'Подразделения'}
						/>
						<TextView
							value = {positions}
							onChange = {this.props.updatePositions.bind(this)}
							placeholder={'Должности'}
						/>
						<TextView
							value = {managersName}
							onChange = {this.props.updateManagersName.bind(this)}
							placeholder = {'ФИО руководителей подразделений'}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled = {disabled}
						onClick = {this.sendData.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default InternalStudyView;
