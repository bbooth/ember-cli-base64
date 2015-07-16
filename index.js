/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-base64',
  included: function (app) {
    app.import(app.bowerDirectory + "/base64/base64.js");
  }
};
