const config = require("../config.json");
import { ethers } from "ethers";

export default class GenericEtherAccount {
  constructor(privateKey, etherscanEndpoint, name, currency, networkId) {
    this.provider = ethers.getDefaultProvider(networkId);
    if (!privateKey) privateKey = ethers.Wallet.createRandom().privateKey;
    this.privateKey = privateKey;
    this.etherscanEndpoint = etherscanEndpoint;
    this.account = new ethers.Wallet(this.privateKey, this.provider);
    this.bank = name;
    this.currency = currency;
    this.type = "ether";
  }

  async getBalance() {
    return ethers.utils.formatEther(
      (await fetch(
        this.etherscanEndpoint +
          "?module=account&action=balance&address=" +
          this.account.address +
          "&tag=latest&apikey=" +
          config.etherscanApiKey
      ).then(res => res.json())).result
    );
  }

  async getTransactions() {
    return (await fetch(
      this.etherscanEndpoint +
        "?module=account&action=txlist&address=" +
        this.account.address +
        "&startblock=0&endblock=99999999&sort=asc&apikey=" +
        config.etherscanApiKey
    ).then(res => res.json())).result;
  }

  async sendTransaction(to, amount) {
    console.log(ethers.utils.parseEther(amount));
    return await this.account.sendTransaction({
      to,
      value: ethers.utils.parseEther(amount)
    });
  }
}
