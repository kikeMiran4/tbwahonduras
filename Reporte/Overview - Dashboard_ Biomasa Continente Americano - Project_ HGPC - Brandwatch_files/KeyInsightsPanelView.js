define(["backbone"],function(Backbone){"use strict";return Backbone.View.extend({className:"key-insights__stat",render:function render(data){this.$el.html(this.template(data));return this.$el}})});