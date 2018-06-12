var CommunityToken = artifacts.require("CommunityToken");
var CommunityTokenInstance;
var TotalSupply;
var BalancceOwner;

contract('CommunityToken', function(accounts) {
    it("test of the community token", function() {
        return CommunityToken.deployed().then(function(instance) {
            CommunityTokenInstance = instance;
            return CommunityTokenInstance.like(accounts[0]);             
        }).then(function(result) {
            TotalSupply = result;
            return CommunityTokenInstance.balanceOf(accounts[0]);             
        }).then(function(result) {
            BalancceOwner = result;
            assert.equal(BalancceOwner, 1, "Owner balance is null");            
        });        
    });
});


 
 