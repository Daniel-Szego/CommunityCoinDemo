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
    },
    quorum: {
//      host: "13.95.161.105", 
      host: "52.166.4.7",
//      host: "13.95.149.67", 
      network_id: "*",
      port: 22000,
      gasPrice: 0,
      gas: 4500000
    },
    quorum2: {
//      host: "13.95.161.105", 
      host: "52.166.4.7",
//      host: "13.95.149.67", 
      network_id: "*",
      port: 22001,
      gasPrice: 0,
      gas: 4500000
ft    quorum3: {
//      host: "13.95.161.105", 
      host: "52.166.4.7",
//      host: "13.95.149.67", 
      network_id: "*",
      port: 22001,
      gasPrice: 0,
      gas: 4500000
    }         
  }
};