import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import DropDown from '../components/modules/dropdown';
import SelectOneItems from '../components/modules/select-one-item';
import { TextView } from '../components/modules/text-label';
import CheckBox from '../components/modules/new-checkbox';
import '../../style/addProgramm.scss';

class AddProgramm extends React.Component {

	constructor(props) {
		super(props);
	}

	handleBack() {
		window.location.hash = '/newrequests';
	}

	updateBusinessType(e, payload, text) {
		this.props.updateBusinessType(text);
		this.props.updateSelectedPayload(payload);
	}


	sendData() {
		this.props.sendData({ ...this.props });
	}

	render() {
		const disabled = (this.props.form !== 'Тип бизнеса' && this.props.selectedBusiness !== 0 && this.props.selectedOrg !== null && this.props.programmName !== '') ? false : true;

		return (
			<div className = 'add-propgramm-request'>
				<div className = 'add-propgramm-request__title-container'>
					<span className='icon-left-open-big add-propgramm-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'add-propgramm-request__title-container__title'>Заявка на добавление учебной программы</span>
				</div>
				<div className = 'add-propgramm-request__container'>
					<div className = 'left-block'>
						<TextView
							className='programm-name'
							value={this.props.programmName}
							onChange={this.props.handleUpdateProgrammName}
							placeholder={'Название учебной программы'}
						/>
						<DropDown
							items = {this.props.businessType}
							onChange = {this.updateBusinessType.bind(this)}
							selectedPayload = {this.props.selectedBusiness}
							className = {'format'}
							placeholder={'Тип бизнеса'}
							deviders = {[ 1 ]}
						/>
					</div>
					<div className = 'right-block'>
						<SelectOneItems
							className={'event'}
							title={'Обучающая организация'}
							{...this.props.orgs}
							selectedItem={this.props.selectedOrg}
							onClick={this.props.handleGetOrgs}
							onSave={this.props.handleSaveOrg}
							placeholder={'Обучающая организация'}
						/>
						<CheckBox
							label={'Наличие разработанного тестирования по учебной программе'}
							className={'checkbox'}
							checked={this.props.test}
							onChange={this.props.handleChangeTest}
						/>
					</div>
					<ButtonPrimary
						className = 'submit'
						text = {'Подать заявку'}
						disabled = {disabled}
						onClick = {this.sendData.bind(this)}
					/>
					<div className = 'add-propgramm-request__container__alert'>
						{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
						{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
					</div>
				</div>
			</div>
		);
	}
}

export default AddProgramm;
