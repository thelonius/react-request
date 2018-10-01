import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import { TextView } from '../components/modules/text-label';
import SelectOneItems from '../components/modules/select-one-item';
import DropDown from '../components/modules/dropdown';
import InputCalendar from '../components/modules/input-calendar';
import '../../style/trainingPrograms.scss';

class TrainingPrograms extends React.Component {

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

	render() {
		const disabled = (this.props.trainingProgram !== null && this.props.selectedPayload !== 0 && this.props.town !== '' && this.props.startTime !== '' && this.props.endTime !== '' &&
		this.props.positions !== '' && this.props.place !== '') ? false : true;

		return (
			<div className = 'training-programs-request'>
				<div className = 'training-programs-request__title-container'>
					<span className='icon-left-open-big training-programs-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'training-programs-request__title-container__title'>Заявка на проведение обучения по разработанным учебным программам</span>
				</div>
				<div className = 'training-programs-request__container'>
					<div className='left-block'>
						<SelectOneItems
							className={'event'}
							title={'Учебная программа'}
							{...this.props.programs}
							selectedItem={this.props.trainingProgram}
							onClick={this.props.handleGetPrograms}
							onSave={this.props.handleSavePrograms}
							placeholder={'Учебная программа'}
						/>
						<DropDown
							items = {this.props.items}
							onChange = {this.props.handleUpdateForm}
							selectedPayload = {this.props.selectedPayload}
							className = {'format'}
							deviders={[ 1 ]}
							placeholder={'Форма обучения'}
						/>
						<TextView
							placeholder={'Город'}
							value={this.props.town}
							onChange={this.props.handleUpdateTown}
						/>
						<TextView
							placeholder={'Должности, для которых организуется обучение'}
							value={this.props.positions}
							onChange={this.props.handleUpdatePositions}
						/>
					</div>
					<div className='right-block'>
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
						<TextView
							placeholder={'Место'}
							value={this.props.place}
							onChange={this.props.handleUpdatePlace}
						/>
						<TextView
							placeholder={'Комментарий'}
							value={this.props.comment}
							onChange={this.props.handleUpdateComment}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled={disabled}
						onClick={this.handlePost.bind(this)}
					/>
					<div className = 'training-programs-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default TrainingPrograms;
