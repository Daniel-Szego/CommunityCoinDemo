module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    azureNetwork: {
      host: "ethj2w7dalmh.eastus.cloudapp.azure.com", 
      network_id: 923761311,
      port: 8545,
      gas: 4600000
    }
  }
};
