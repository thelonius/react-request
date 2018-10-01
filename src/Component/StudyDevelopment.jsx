import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import DropDown from '../components/modules/dropdown';
import { TextAreaView, TextView } from '../components/modules/text-label';
import CheckBox from '../components/modules/new-checkbox';
import InputCalendar from '../components/modules/input-calendar';

class StudyDevelopment extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.props.getRegions();
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	handleChangeThematic(e, thematic, text) {
		this.props.changeThematic(thematic, text);
	}

	handleChangeFormat(e, format, text) {
		this.props.changeFormat(format, text);
	}

	handleChangeBuisnes(e, buisnes, text) {
		this.props.changeBuisnes(buisnes, text);
	}

	handleChangeRegion(e, region) {
		this.props.changeRegion(region);
	}

	handlePost() {
		const { thematic, format, buisnes, trainingPurpose, trainingResult, numWorkers, positions, startDate, endDate, comment, predTest, postTest, profile, selectedRegion } = this.props;

		this.props.handleSubmit({
			thematic: thematic,
			format: format,
			buisnes: buisnes,
			startDate: startDate,
			endDate: endDate,
			trainingPurpose: trainingPurpose,
			trainingResult: trainingResult,
			numWorkers: numWorkers,
			positions: positions,
			comment: comment,
			predTest: predTest,
			postTest: postTest,
			profile: profile,
			region: selectedRegion
		});
	}

	render() {
		const { thematics, error, selectedThematic, formats, selectedFormat, buisnesTypes, selectedBuisnes, trainingPurpose, trainingResult,
			numWorkers, positions, startDate, endDate, comment, predTest, postTest, profile, status, regions, selectedRegion } = this.props;
		const disabled = (selectedThematic !== 0 && selectedFormat !== 0 && selectedBuisnes !== 0 && startDate > new Date()
		&& endDate > new Date() && startDate < endDate && trainingPurpose !== '' &&
		trainingResult !== '' && numWorkers !== '' && positions !== '') ? false : true;

		return (
			<div className = 'study-development-request'>
				<div className = 'study-development-request__title-container'>
					<span className='icon-left-open-big study-development-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'study-development-request__title-container__title'>Заявка на разработку обучения</span>
				</div>
				<div className = 'study-development-request__container'>
					{status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={error} />}
					{status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					<div className='left-block'>
						<div className='text'>Общая информация:</div>
						<DropDown
							items = {thematics}
							selectedPayload = {selectedThematic}
							deviders={[ 1 ]}
							className ='dropdown'
							placeholder={'Тематика обучения'}
							onChange={this.handleChangeThematic.bind(this)}
						/>
						<DropDown
							items = {formats}
							selectedPayload = {selectedFormat}
							className = 'dropdown'
							placeholder={'Формат проведения'}
							deviders={[ 1 ]}
							onChange={this.handleChangeFormat.bind(this)}
						/>
						<DropDown
							items = {buisnesTypes}
							selectedPayload = {selectedBuisnes}
							className = 'dropdown'
							placeholder={'Вид бизнеса'}
							deviders={[ 1 ]}
							onChange={this.handleChangeBuisnes.bind(this)}
						/>
						<TextAreaView
							className='study-development-request__container_text-area'
							placeholder={'Цель обучения'}
							value={trainingPurpose}
							onChange={this.props.handleChangePurpose}
						/>
						<TextAreaView
							className='study-development-request__container_text-area'
							placeholder={'Планируемый результат после обучения'}
							value={trainingResult}
							onChange={this.props.handleChangeResult}
						/>
						<div className='text'>Целевая аудитория:</div>
						<TextView
							placeholder={'Количество сотрудников'}
							value={numWorkers}
							onChange={this.props.handleChangeNumber}
						/>
						<TextAreaView
							className='study-development-request__container_text-area'
							placeholder={'Должности'}
							value={positions}
							onChange={this.props.handleChangePositions}
						/>
						<DropDown
							items = {regions}
							selectedPayload = {selectedRegion}
							className = 'dropdown'
							placeholder={'Формат проведения'}
							deviders={[ 1 ]}
							onChange={this.handleChangeRegion.bind(this)}
						/>
					</div>
					<div className='right-block'>
						<div className='text'>Оценка эффективности обучения:</div>
						<CheckBox
							label={'Предварительное тестирование'}
							checked={predTest}
							onChange={this.props.handleChangePredTest}
						/><br/>
						<CheckBox
							label={'Посттренинговое тестирование'}
							checked={postTest}
							onChange={this.props.handleChangePostTest}
						/><br/>
						<CheckBox
							label={'Анкета обратной связи'}
							checked={profile}
							onChange={this.props.handleChangeProfile}
						/><br/>
						<div className='text'>Дополнительная информация:</div>
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
						<TextAreaView
							className='study-development-request__container_text-area'
							placeholder={'Комментарии/предложения'}
							onChange={this.props.handleAddComment}
							value={comment}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled={disabled}
						onClick={this.handlePost.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default StudyDevelopment;
