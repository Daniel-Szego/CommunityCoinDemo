pragma solidity ^0.4.17;

import "./ERC20.sol";

contract CommunityToken is ERC20Interface {
     string public constant symbol = "COMM";
     string public constant name = "Example Community Token";
     uint8 public constant decimals = 18;
     uint256 _actualSupply = 0;
     uint256 _totalSupply = 0;
     
     // Owner of this contract
     address public owner;
   
      // Balances for each account
      mapping(address => uint256) balances;
   
      // Owner of account approves the transfer of an amount to another account
      mapping(address => mapping (address => uint256)) allowed;
   
      // Functions with this modifier can only be executed by the owner
      modifier onlyOwner() {
          assert (msg.sender == owner); 
          _;
      }
   
      // Constructor
      function CommunityToken() {
          owner = msg.sender;
      }
   
      function totalSupply() constant returns (uint256 totalSupply) {
          totalSupply = _actualSupply;
      }
   
      // What is the balance of a particular account?
      function balanceOf(address _owner) constant returns (uint256 balance) {
         return balances[_owner];
      }
   
      // Transfer the balance from owner's account to another account
      function transfer(address _to, uint256 _amount) returns (bool success) {
          if (balances[msg.sender] >= _amount 
              && _amount > 0
              && balances[_to] + _amount > balances[_to]) {
              balances[msg.sender] -= _amount;
              balances[_to] += _amount;
             Transfer(msg.sender, _to, _amount);
              return true;
          } else {
              return false;
          }
      }
   
      // Send _value amount of tokens from address _from to address _to
      // The transferFrom method is used for a withdraw workflow, allowing contracts to send
      // tokens on your behalf, for example to "deposit" to a contract address and/or to charge
      // fees in sub-currencies; the command should fail unless the _from account has
      // deliberately authorized the sender of the message via some mechanism; we propose
      // these standardized APIs for approval:
      function transferFrom(
          address _from,
          address _to,
          uint256 _amount
     ) returns (bool success) {
         if (balances[_from] >= _amount
             && allowed[_from][msg.sender] >= _amount
             && _amount > 0
             && balances[_to] + _amount > balances[_to]) {
             balances[_from] -= _amount;
             allowed[_from][msg.sender] -= _amount;
             balances[_to] += _amount;
             Transfer(_from, _to, _amount);
             return true;
         } else {
             return false;
         }
     }
  
     // Allow _spender to withdraw from your account, multiple times, up to the _value amount.
     // If this function is called again it overwrites the current allowance with _value.
     function approve(address _spender, uint256 _amount) returns (bool success) {
         allowed[msg.sender][_spender] = _amount;
         Approval(msg.sender, _spender, _amount);
         return true;
     }
  
     function allowance(address _owner, address _spender) constant returns (uint256 remaining) {
         return allowed[_owner][_spender];
     }

     function like (address _likedAddress){
        assert(msg.sender !=  _likedAddress);
        balances[_likedAddress] += 1;
         _actualSupply += 1;
     }

     function kill() {
         selfdestruct(owner);
         }
 }