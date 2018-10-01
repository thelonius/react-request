import React from 'react';
import '../../style/PurposeCourse.scss';
import SelectItems from '../components/modules/select-items';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';

class PurposeCourse extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chooseCourse: false,
			chooseCollabs: false
		};
	}

	handleChooseCourse() {
		this.props.getCourse();
		this.setState({
			chooseCourse: !this.state.chooseCourse
		});
	}

	handleChooseCollabs() {
		this.props.getCollabs();
		this.setState({
			chooseCollabs: !this.state.chooseCollabs
		});
	}

	handleCloseCourse() {
		this.setState({
			chooseCourse: !this.state.chooseCourse
		});
	}

	handleCloseCollabs() {
		this.setState({
			chooseCollabs: !this.state.chooseCollabs
		});
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	handleSubmit() {
		this.props.handleSubmit({
			selectedCourse: this.props.selectedCourse,
			selectedCollabs: this.props.selectedCollabs,
			selectedEvent: this.props.selectedEvent,
			date: this.props.date
		});
	}

	render() {
		const { chooseCourse, chooseCollabs } = this.state;
		const disabled = (this.props.selectedCourse.length > 0 && this.props.selectedCollabs.length > 0) ? false : true;

		return (
			<div className = 'purpose-course-request'>
				<div className = 'purpose-course-request__title-container'>
					<span className='icon-left-open-big purpose-course-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'purpose-course-request__title-container__title'>Назначение курса</span>
				</div>
				<div className = 'purpose-course-request__container'>
					<div className = 'left-block'>
						<ButtonPrimary className='button' text={'Выбрать курс'} onClick={this.handleChooseCourse.bind(this)}/>
						{chooseCourse === true &&
							<SelectItems
								title={'Выбор курсов'}
								onClose={this.handleCloseCourse.bind(this)}
								{...this.props.course}
								selectedItems={this.props.selectedCourse}
								changedQuary={this.props.getCourse}
								onSave={this.props.handleSaveCourse}
							/>
						}
						<div>
							{this.props.selectedCourse.map((course, index) => {
								return (
									<div className='names' key={index}>{course.data.courseName}<br/></div>
								);
							})}
						</div>
					</div>
					<div className = 'right-block'>
						<ButtonPrimary className='button' text={'Выбрать сотрудников'} onClick={this.handleChooseCollabs.bind(this)}/>
						{chooseCollabs === true &&
							<SelectItems
								title={'Выбор сотрудников'}
								onClose={this.handleCloseCollabs.bind(this)}
								{...this.props.collabs}
								selectedItems={this.props.selectedCollabs}
								changedQuary={this.props.getCollabs}
								onSave={this.props.handleSaveCollabs}
							/>
						}
						<div>
							{this.props.selectedCollabs.map((course, index) => {
								return (
									<div className='names' key={index}>{course.data.collabName}<br/></div>
								);
							})}
						</div>
					</div>
					<div className = 'purpose-course-request__container_event'>
						<InputCalendar
							className={'date'}
							placeholder={'Дата начала тестирования'}
							date={this.props.date}
							onSave = {this.props.handleChangeDate}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled={disabled}
						onClick={this.handleSubmit.bind(this)}
					/>
					<div className = 'purpose-course-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default PurposeCourse;
