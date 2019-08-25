import parseAccount from "./AccountParser";
import { ethers } from "ethers";
import erc20 from "./erc20.abi.json";

import config from "../config.json";

export default class ERC20Account {
  constructor(param) {
    this.ethereum = parseAccount(param.account);
    this.account = this.ethereum.account;
    this.contract = new ethers.Contract(
      param.contractAddress,
      erc20,
      this.ethereum.provider
    );
    this.bank = param.tokenName + " (ERC20)";
    this.type = "erc20";
    this.currency = param.tokenCode;
    this.showTransactions = false;
    this.canDeriveToken = false;
  }

  async getBalance() {
    return (await fetch(
      this.ethereum.etherscanEndpoint +
        "?module=account&action=tokenbalance&contractaddress=" +
        this.contract.address +
        "&address=" +
        this.ethereum.account.address +
        "&tag=latest&apikey=" +
        config.etherscanApiKey
    ).then(res => res.json())).result;
  }
}
