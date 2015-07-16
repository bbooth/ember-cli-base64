module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-bootstrap and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function () {
    return this.addBowerPackageToProject('base64', '~0.3.0');
  }
};
