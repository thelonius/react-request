import React from 'react';
import '../../style/PurposeTest.scss';
import SelectItems from '../components/modules/select-items';
import SelectOneItems from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import InputCalendar from '../components/modules/input-calendar';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';

class PurposeTest extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chooseTests: false,
			chooseCollabs: false
		};
	}

	handleChooseTests() {
		this.props.getTests();
		this.setState({
			chooseTests: !this.state.chooseTests
		});
	}

	handleChooseCollabs() {
		this.props.getCollabs();
		this.setState({
			chooseCollabs: !this.state.chooseCollabs
		});
	}

	handleCloseTests() {
		this.setState({
			chooseTests: !this.state.chooseTests
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
			selectedTests: this.props.selectedTests,
			selectedCollabs: this.props.selectedCollabs,
			selectedEvent: this.props.selectedEvent,
			date: this.props.date
		});
	}

	render() {
		const { chooseTests, chooseCollabs } = this.state;
		const disabled = (this.props.selectedTests.length > 0 && this.props.selectedCollabs.length > 0) ? false : true;

		return (
			<div className = 'purpose-test-request'>
				<div className = 'purpose-test-request__title-container'>
					<span className='icon-left-open-big purpose-test-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'purpose-test-request__title-container__title'>Назначение теста</span>
				</div>
				<div className = 'purpose-test-request__container'>
					<div className = 'left-block'>
						<ButtonPrimary className='button' text={'Выбрать тесты'} onClick={this.handleChooseTests.bind(this)}/>
						{chooseTests === true &&
							<SelectItems
								title={'Выбор тестов'}
								onClose={this.handleCloseTests.bind(this)}
								{...this.props.tests}
								selectedItems={this.props.selectedTests}
								changedQuary={this.props.getTests}
								onSave={this.props.handleSaveTests}
							/>
						}
						<div>
							{this.props.selectedTests.map((test, index) => {
								return (
									<div className='names' key={index}>{test.data.testName}<br/></div>
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
							{this.props.selectedCollabs.map((test, index) => {
								return (
									<div className='names' key={index}>{test.data.collabName}<br/></div>
								);
							})}
						</div>
					</div>
					<div className = 'purpose-test-request__container_event'>
						<SelectOneItems
							className={'event'}
							title={'Выбор мероприятия'}
							{...this.props.events}
							selectedItem={this.props.selectedEvent}
							onClick={this.props.handleGetEvents}
							onSave={this.props.handleSaveEvents}
							placeholder={'Выберите мероприятие'}
						/>
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
					<div className = 'purpose-test-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default PurposeTest;
