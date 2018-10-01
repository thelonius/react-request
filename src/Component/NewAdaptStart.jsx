import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import DropDown from '../components/modules/dropdown';
import SelectOneItems from '../components/modules/select-one-item';
import '../../style/newAdaptStart.scss';

class NewAdaptStart extends React.Component {

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
		const disabled = (this.props.selectedAdapt !== null && this.props.selectedManager !== null && this.props.selectedCollab !== null && this.props.selectedTutor !== null
		&& this.props.selectedHR !== null && this.props.selectedPayload !== 0) ? false : true;

		return (
			<div className = 'new-adapt-request'>
				<div className = 'new-adapt-request__title-container'>
					<span className='icon-left-open-big new-adapt-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'new-adapt-request__title-container__title'>Заявка на запуск процесса адаптации</span>
				</div>
				<div className = 'new-adapt-request__container'>
					<div className = 'left-block'>
						<InputCalendar
							placeholder={'Дата и время начала прохождения'}
							onSave = {this.props.handleUpdateStartDate}
							date = {this.props.startDate}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор адаптации'}
							{...this.props.adapts}
							selectedItem={this.props.selectedAdapt}
							onClick={this.props.handleGetAdapts}
							onSave={this.props.handleSaveAdapt}
							placeholder={'Выберите план адаптации'}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор сотрудника'}
							{...this.props.collabs}
							selectedItem={this.props.selectedCollab}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveCollab}
							placeholder={'Выберите сотрудника'}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор ответственного'}
							{...this.props.collabs}
							selectedItem={this.props.selectedHR}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveHR}
							placeholder={'Выберите ответственного'}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор наставника'}
							{...this.props.collabs}
							selectedItem={this.props.selectedTutorSec}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveTutorSec}
							placeholder={'Выберите наставника(в случае необходимости второго)'}
						/>
					</div>
					<div className = 'right-block'>
						<InputCalendar
							placeholder={'Дата и время закрытия адаптации'}
							onSave = {this.props.handleUpdateEndDate}
							date = {this.props.endDate}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор руководителя'}
							{...this.props.collabs}
							selectedItem={this.props.selectedManager}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveManager}
							placeholder={'Выберите руководителя сотрудника'}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор наставника'}
							{...this.props.collabs}
							selectedItem={this.props.selectedTutor}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveTutor}
							placeholder={'Выберите наставника'}
						/>
						<DropDown
							items = {this.props.items}
							onChange = {this.updateFormName.bind(this)}
							selectedPayload = {this.props.selectedPayload}
							className = {'format'}
							placeholder={'Тип бизнеса'}
							deviders = {[ 1 ]}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор ответственного'}
							{...this.props.collabs}
							selectedItem={this.props.selectedHRSec}
							onClick={this.props.handleGetCollabs}
							onSave={this.props.handleSaveHRSec}
							placeholder={'Выберите ответственного(в случае необходимости второго)'}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled = {disabled}
						onClick = {this.sendData.bind(this)}
					/>
					<div className = 'new-adapt-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default NewAdaptStart;
