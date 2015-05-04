import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	buildURL : function ( type, id, snapshot ) {
		return '/friends/' + snapshot.get('friend.id') + '/articles/' + id;
	}
});
