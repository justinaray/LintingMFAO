import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    this._super(...arguments);
    var foo = 'I have' + ' linting errors!'
    console.log(foo)
  }
});
