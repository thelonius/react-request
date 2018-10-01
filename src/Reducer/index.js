import { combineReducers } from 'redux';
import InternalStudyReducer from './InternalStudyReducer';
import RequestReducer from './RequestReducer';
import RequestInfoReducer from './RequestInfoReducer';
import NewRequestReducer from './NewRequestReducer';
import StudyDevelopmentReducer from './StudyDevelopmentReducer';
import ExtensionReducer from './ExtensionReducer';
import PurposeTestReducer from './PurposeTestReducer';
import EnterTestReducer from './EnterTestReducer';
import PurposeCourseReducer from './PurposeCourseReducer';
import NewAdaptStartReducer from './newAdaptStartReducer';
import ExclusionCollabReducer from './ExclusionCollabReducer';
import TransferMaterialReducer from './TransferMaterialReducer';
import AddProgrammReducer from './AddProgrammReducer';
import NotificationEventReducer from './NotificationEventReducer';
import PartnersWebinarReducer from './PartnersWebinarReducer';
import TrainingProgramsReducer from './TrainingProgramsReducer';
import AddLibMaterialReducer from './AddLibMaterialReducer';
import VendorStudyReducer from './VendorStudyReducer';

export default combineReducers({
	internalStudyReducer: InternalStudyReducer,
	requestReducer: RequestReducer,
	requestInfoReducer: RequestInfoReducer,
	newRequestReducer: NewRequestReducer,
	studyDevelopmentReducer: StudyDevelopmentReducer,
	extensionReducer: ExtensionReducer,
	purposeTestReducer: PurposeTestReducer,
	enterTestReducer: EnterTestReducer,
	purposeCourseReducer: PurposeCourseReducer,
	newAdaptStartReducer: NewAdaptStartReducer,
	exclusionCollabReducer: ExclusionCollabReducer,
	transferMaterialReducer: TransferMaterialReducer,
	addProgrammReducer: AddProgrammReducer,
	notificationEventReducer: NotificationEventReducer,
	partnersWebinarReducer: PartnersWebinarReducer,
	trainingProgramsReducer: TrainingProgramsReducer,
	addLibMaterialReducer: AddLibMaterialReducer,
	vendorStudyReducer: VendorStudyReducer
});
