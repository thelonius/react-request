import React from 'react';
import '../../style/enterTest.scss';
import SelectItems from '../components/modules/select-items';
import SelectOneItems from '../components/modules/select-one-item';
import { ButtonPrimary } from '../components/modules/button';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';

class Person extends React.Component {

	constructor(props) {
		super(props);
	}

	handleChange(e) {
		if (/[A-Z]|[a-z]|[А-Я]|[а-я]/.test(e.target.value)) {
			this.props.getError('Только цифры');
		} else if (Number(e.target.value) > this.props.selectedTest.maxScore || Number(e.target.value) < 0) {
			this.props.getError('От 0 до ' + this.props.selectedTest.maxScore + ' баллов');
		} else {
			const collabs = this.props.collabs;

			collabs[this.props.index].score = e.target.value.trim();
			this.props.addScore(collabs);
			this.props.onReject();
		}
	}

	render() {
		return (
			<div className='person'>
				<div className='names'>{this.props.data.collabName}</div>
				<span className='score'>Баллы: </span>
				<input
					placeholder={'До ' + this.props.selectedTest.maxScore + ' баллов'}
					onChange={this.handleChange.bind(this)}
					className='input'
					type='text'
				/>
			</div>
		);
	}
}

class EnterTestResult extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			chooseCollabs: false
		};
	}

	handleChooseCollabs() {
		this.props.getCollabs();
		this.setState({
			chooseCollabs: !this.state.chooseCollabs
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
			selectedEvent: this.props.selectedEvent
		});
	}

	render() {
		const { chooseCollabs } = this.state;
		const disabled = (this.props.selectedTests !== null && this.props.selectedCollabs.length > 0) ? false : true;

		return (
			<div className = 'enter-test-request'>
				<div className = 'enter-test-request__title-container'>
					<span className='icon-left-open-big enter-test-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'enter-test-request__title-container__title'>Внесение результатов тестирования</span>
				</div>
				<div className = 'enter-test-request__container'>
					<div className = 'enter-test-request__container_event'>
						<SelectOneItems
							className={'event'}
							title={'Выбор теста'}
							{...this.props.tests}
							selectedItem={this.props.selectedTests}
							onClick={this.props.handleGetTests}
							onSave={this.props.handleSaveTests}
							placeholder={'Выберите тест'}
						/>
						<SelectOneItems
							className={'event'}
							title={'Выбор мероприятия'}
							{...this.props.events}
							selectedItem={this.props.selectedEvent}
							onClick={this.props.handleGetEvents}
							onSave={this.props.handleSaveEvents}
							placeholder={'Выберите мероприятие'}
						/>
					</div>
					<div className = 'enter-test-request__container_collab'>
						<ButtonPrimary className='button' text={'Выбрать сотрудников'} onClick={this.handleChooseCollabs.bind(this)}/>
						{chooseCollabs === true &&
							<div>
								<SelectItems
									title={'Выбор сотрудников'}
									onClose={this.handleCloseCollabs.bind(this)}
									{...this.props.collabs}
									selectedItems={this.props.selectedCollabs}
									changedQuary={this.props.getCollabs}
									onSave={this.props.handleSaveCollabs}
								/>
							</div>
						}
						<div>
							{this.props.selectedCollabs.map((collab, index) => {
								return (
									<Person
										key={index}
										index={index}
										{...collab}
										getError={this.props.getDataError}
										addScore={this.props.addScore}
										onReject={this.props.handleRejectStatus}
										collabs={this.props.selectedCollabs}
										selectedTest={this.props.selectedTests}
									/>
								);
							})}
						</div>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled={disabled}
						onClick={this.handleSubmit.bind(this)}
					/>
					<div className='enter-test-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default EnterTestResult;
