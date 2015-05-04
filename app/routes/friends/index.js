import Ember from 'ember';


// setting up the application state.


export default Ember.Route.extend({
	model : function () {
		return this.store.findAll('friend');
	}
});
