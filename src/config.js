import {addServer, getAll} from  './servers';
import env from './env';

const routerId = '6385385939497347608';
const customBaseUrl = env === 'production' ? '/custom_web_template.html' : 'http://study.merlion.ru/custom_web_template.html';

addServer({id: '6368324238621361984', name: 'Requests'})
.addActions(
	[
		'Requests', 'RequestInfo', 'ActionRequest', 'NewRequests'
	]
);

addServer({id: '6363552141689384797', name: 'internalStudy'})
.addActions(
	[
		'Submit'
	]
);

addServer({id: '6381699711159530824', name: 'studyDevelop'})
.addActions(
	[
		'Submit', 'Regions'
	]
);

addServer({id: '6356176533613261273', name: 'Test'})
.addActions(
	[
		'Collaborators', 'SaveData'
	]
);

addServer({id: '6382403003325502593', name: 'purposeTest'})
.addActions(
	[
		'Tests', 'Events', 'Collabs', 'Submit'
	]
);

addServer({id: '6383983263697280065', name: 'enterTest'})
.addActions(
	[
		'Tests', 'Events', 'Collabs', 'Submit'
	]
);

addServer({id: '6384352410576552703', name: 'purposeCourse'})
.addActions(
	[
		'Course', 'Collabs', 'Submit'
	]
);

addServer({id: '6384729620610942387', name: 'newAdaptStart'})
.addActions(
	[
		'Collabs', 'Adapts', 'Submit'
	]
);

addServer({id: '6385089950972970411', name: 'exclusionCollab'})
.addActions(
	[
		'Collaborators', 'SaveData'
	]
);

addServer({id: '6385131201664612747', name: 'transferMaterial'})
.addActions(
	[
		'Collaborators', 'SaveData'
	]
);

addServer({id: '6386524845541042118', name: 'addProgramm'})
.addActions(
	[
		'Orgs', 'Submit'
	]
)

addServer({id: '6386580652978999509', name: 'notificationEvent'})
.addActions(
	[
		'Event', 'SaveData'
	]
)

addServer({id: '6386899804496809778', name: 'partnersWebinar'})
.addActions(
	[
		'Submit'
	]
)

addServer({id: '6387267277562800413', name: 'trainingProg'})
.addActions(
	[
		'Submit', 'EducationMethod'
	]
)

addServer({id: '6387717866801795199', name: 'addMaterial'})
.addActions(
	[
		'Submit', 'Sections', 'MaterialType'
	]
)

addServer({id: '6389195511296130470', name: 'vendorStudy'})
.addActions(
	[
		'Submit'
	]
)

var obj = {

	url: {
		getServerId(_server_name, _action_name) {
			var _servers = getAll().filter(s => {
				var actions = s.getActions().filter(action => {
					return action === _action_name;
				});
				return (s.getName() === _server_name && actions.length > 0);
			}).map( s => s.getId());
			return _servers.length > 0 ? _servers[0] : '';
		},

		createPath(obj){
			if (!('server_name' in obj)) return '/';
			if (!('action_name' in obj)) obj.action_name = '';
			var serverId = this.getServerId(obj.server_name, obj.action_name);
			var basePath = customBaseUrl.concat('?object_id=').concat(routerId).concat('&server_id='.concat(serverId));

			return basePath.concat(Object.keys(obj).map(function(k){
				return '&'.concat(k).concat('=').concat(obj[k]);
			}).join(''));
		}
	},
	/*
	dom: {
		appId: 'app'
	},

	hashes: {
		boilerplate: 'boilerplate'
	}
	*/
}

export default obj;
