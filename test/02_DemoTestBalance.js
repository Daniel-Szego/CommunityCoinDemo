var CommunityToken = artifacts.require("CommunityToken");
var CommunityTokenInstance;
var BalancceOwner;

contract('CommunityToken', function(accounts) {
    it("test of the community token", function() {
        return CommunityToken.deployed().then(function(instance) {
            CommunityTokenInstance = instance;
            return CommunityTokenInstance.balanceOf(accounts[0]);             
        }).then(function(result) {
            BalancceOwner = result;
            assert.equal(BalancceOwner, 0, "Owner balance is null");            
        });
    });
});

