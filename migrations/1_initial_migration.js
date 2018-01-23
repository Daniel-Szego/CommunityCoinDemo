var Migrations = artifacts.require("./Migrations.sol");

//special migration for Quorum
var CommunityToken = artifacts.require("CommunityToken");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  //special migration for Quorum
  //deployer.deploy(CommunityToken, 42, {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]});
  deployer.deploy(CommunityToken);
};

