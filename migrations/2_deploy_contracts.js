//commenting out at quorum
// for quorum everything running from the initial_migration.js

var CommunityToken = artifacts.require("CommunityToken");

module.exports = function(deployer) {
  deployer.deploy(CommunityToken);
};
