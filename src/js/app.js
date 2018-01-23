App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
  // Is there is an injected web3 instance?
  if (typeof web3 !== 'undefined') {
    App.web3Provider = web3.currentProvider;
  } else {
  // If no injected web3 instance is detected, fallback to the TestRPC
    App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
  }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('CommunityToken.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract.
      var CommunityTokenArtifact = data;
      App.contracts.CommunityToken = TruffleContract(CommunityTokenArtifact);

      // Set the provider for our contract.
      App.contracts.CommunityToken.setProvider(App.web3Provider);

      // Use our contract to retieve and mark the adopted pets.
      return App.getBalances();
    });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '#transferButton', App.handleTransfer);
    $(document).on('click', '#likeButton', App.handleLike);    
  },

  handleTransfer: function(event) {
    event.preventDefault();

    var amount = parseInt($('#TTTransferAmount').val());
    var toAddress = $('#TTTransferAddress').val();

    console.log('Transfer ' + amount + ' TT to ' + toAddress);

    var communityTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.CommunityToken.deployed().then(function(instance) {
        communityTokenInstance = instance;

        return communityTokenInstance.transfer(toAddress, amount, {from: account});
      }).then(function(result) {
        alert('Transfer Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },


  handleLike: function(event) {
    event.preventDefault();

    var toAddress = $('#TTLikeAddress').val();

    console.log('Like ' + ' TT to ' + toAddress);

    var communityTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];

      App.contracts.CommunityToken.deployed().then(function(instance) {
        communityTokenInstance = instance;

        return communityTokenInstance.like(toAddress, {from: account});
      }).then(function(result) {
        alert('Like Successful!');
        return App.getBalances();
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  },


  getBalances: function(adopters, account) {
    console.log('Getting likes...');

    var communityTokenInstance;

    web3.eth.getAccounts(function(error, accounts) {
      if (error) {
        console.log(error);
      }

      var account = accounts[0];
      $('#TTAccount').text(account);
      App.contracts.CommunityToken.deployed().then(function(instance) {
        communityTokenInstance = instance;

        return communityTokenInstance.balanceOf(account);
      }).then(function(result) {
        balance = result.c[0];

        $('#TTBalance').text(balance);
      }).catch(function(err) {
        console.log(err.message);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
