import React from 'react';
import { TextView } from '../components/modules/text-label';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import DropDown from '../components/modules/dropdown';
import '../../style/vendorStudy.scss';

class VendorStudy extends React.Component {

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
		this.props.sendData({ ...this.props });
	}

	render() {
		const disabled = (this.props.eventName !== '' && new Date(this.props.startDate) > new Date() && this.props.selectedPayload !== 0 && this.props.selectedTest !== 0 &&
		this.props.subdivision !== '' && this.props.division !== '' && this.props.managers !== '' && this.props.vendorName !== '' && this.props.reason !== '') ? false : true;

		return (
			<div className = 'vendor-study-request'>
				<div className = 'vendor-study-request__title-container'>
					<span className='icon-left-open-big vendor-study-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'vendor-study-request__title-container__title'>Заявка на вендорское обучение</span>
				</div>
				<div className = 'vendor-study-request__container'>
					<div className='audience'>Перед формированием заявки просим Вас <a href='http://study.merlion.ru/view_doc.html?mode=education_method&doc_id=5998417212462820987&object_id=6000202503992135490'>ознакомиться</a> с регламентом организации и проведения вендорского обучения</div>
					<div className = 'left-block'>
						<div className='audience'>Данные мероприятия:</div>
						<TextView
							value = {this.props.vendorName}
							onChange = {this.props.handleUpdateVendorName}
							placeholder = {'Название вендора'}
						/>
						<TextView
							value = {this.props.eventName}
							onChange = {this.props.handleUpdateEventName}
							placeholder = {'Тема учебного мероприятия'}
						/>
						<TextView
							value = {this.props.reason}
							onChange = {this.props.handleUpdateReason}
							placeholder = {'Обоснование для проведения обучения'}
						/>
						<InputCalendar
							placeholder={'Дата проведения'}
							onSave = {this.props.handleUpdateStartDate}
							date = {this.props.startDate}
						/>
						<TextView
							value = {this.props.time}
							onChange = {this.props.handleUpdateTime}
							placeholder = {'Время проведения'}
						/>
						<DropDown
							items = {this.props.items}
							onChange = {this.updateFormName.bind(this)}
							selectedPayload = {this.props.selectedPayload}
							className = {'format'}
							deviders={[ 1 ]}
							placeholder={'Формат проведения'}
						/>
						<DropDown
							items = {this.props.tests}
							onChange = {this.props.handleUpdateTest}
							selectedPayload = {this.props.selectedTest}
							className = {'format'}
							deviders={[ 1 ]}
							placeholder={'Необходимость тестирования после обучения'}
						/>
					</div>
					<div className = 'right-block'>
						<div className='audience'>Целевая аудитория:</div>
						<TextView
							value = {this.props.division}
							onChange = {this.props.updateDivision.bind(this)}
							placeholder={'Дивизионы'}
						/>
						<TextView
							value = {this.props.subdivision}
							onChange = {this.props.updateSubdivision.bind(this)}
							placeholder={'Департаменты/Отделы/Должности'}
						/>
						<TextView
							value = {this.props.managers}
							onChange = {this.props.handleUpdateManagers}
							placeholder={'ФИО руководителей подразделений'}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled = {disabled}
						onClick = {this.sendData.bind(this)}
					/>
					<div className = 'vendor-study-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default VendorStudy;
