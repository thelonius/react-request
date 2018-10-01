import React from 'react';
import { AlertDanger, AlertSuccess } from '../components/modules/alert';
import { ButtonPrimary } from '../components/modules/button';
import DropDown from '../components/modules/dropdown';
import SelectOneItems from '../components/modules/select-one-item';
import { TextView } from '../components/modules/text-label';
import '../../style/addMaterial.scss';
import obj from '../config';

class AddLibMaterial extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getMaterialType();
	}

	componentWillUnmount() {
		this.props.rejectData();
	}

	handleBack() {
		this.props.rejectData();
		window.location.hash = '/newrequests';
	}

	sendData() {
		this.props.sendData({ ...this.props });
	}

	render() {
		const disabled = (this.props.selectedCode !== 0 && this.props.selectedType !== 0 && this.props.selectedOrientation !== 0 && this.props.selectedDownload !== 0 && this.props.selectedSection !== null &&
			this.props.materialName !== '' && this.props.author !== '') ? false : true;

		return (
			<div className = 'add-material-request'>
				<div className = 'add-material-request__title-container'>
					<span className='icon-left-open-big add-material-request__title-container__icon' onClick={this.handleBack.bind(this)}/>
					<span className = 'add-material-request__title-container__title'>Заявка на добавление материала библиотеки</span>
				</div>
				<form encType='multipart/form-data' method='post' action={obj.url.createPath({ server_name: 'addMaterial', action_name: 'Submit' })}>
					<input type='hidden' value={this.props.materialName} name='material'/>
					<input type='hidden' value={this.props.selectedSection !== null ? this.props.selectedSection.id : 0} name='section'/>
					<input type='hidden' value={this.props.author} name='author'/>
					<input type='hidden' value={this.props.code} name='code'/>
					<input type='hidden' value={this.props.selectedType.toString()} name='type'/>
					<input type='hidden' value={this.props.type} name='typeName'/>
					<input type='hidden' value={this.props.orientation} name='orientation'/>
					<input type='hidden' value={this.props.download} name='download'/>
					<div className = 'add-material-request__container'>
						<div className = 'left-block'>
							<TextView
								value={this.props.materialName}
								onChange={this.props.handleUpdateMaterialName}
								placeholder={'Название материала'}
							/>
							<SelectOneItems
								className={'event'}
								title={'Раздел в который необходимо поместить материал'}
								{...this.props.sections}
								selectedItem={this.props.selectedSection}
								onClick={this.props.handleGetSections}
								onSave={this.props.handleSaveSection}
								placeholder={'Раздел в который необходимо поместить материал'}
							/>
							<TextView
								value={this.props.author}
								onChange={this.props.handleUpdateAuthor}
								placeholder={'Автор'}
								className='author'
							/>
							<input
								type='file'
								id='file'
								name='file'
								accept='application/pdf'
							/>
						</div>
						<div className = 'right-block'>
							<DropDown
								items = {this.props.materialCode}
								onChange = {this.props.handleMaterialCode}
								selectedPayload = {this.props.selectedCode}
								placeholder={'Код материала'}
								deviders = {[ 1 ]}
							/>
							<DropDown
								items = {this.props.materialType}
								onChange = {this.props.handleMaterialType}
								selectedPayload = {this.props.selectedType}
								placeholder={'Тип материала'}
								deviders = {[ 1 ]}
							/>
							<DropDown
								items = {this.props.orientations}
								onChange = {this.props.handleOrientation}
								selectedPayload = {this.props.selectedOrientation}
								placeholder={'Тип бизнеса'}
								deviders = {[ 1 ]}
							/>
							<DropDown
								items = {this.props.downloads}
								onChange = {this.props.handleDownload}
								selectedPayload = {this.props.selectedDownload}
								placeholder={'Разрешить скачивание материала'}
								deviders = {[ 1 ]}
							/>
						</div>
						<ButtonPrimary
							className = 'submit'
							text = {'Подать заявку'}
							disabled = {disabled}
							type='submit'
						/>
						<div className = 'add-material-request__container__alert'>
							{this.props.status === 'error' && <AlertDanger onClose = {this.props.handleRejectStatus} text={this.props.error} />}
							{this.props.status === 'success' && <AlertSuccess onClose = {this.props.handleRejectStatus} text={'Заявка отправлена'} />}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default AddLibMaterial;
