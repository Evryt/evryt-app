import GenericEtherAccount from "./GenericEtherAccount";

export default class EtherRinkebyAccount extends GenericEtherAccount {
  constructor(privateKey) {
    super(
      privateKey,
      "https://api-rinkeby.etherscan.io/api",
      "Ethereum Rinkeby",
      "RIN",
      4
    );
    this.type = "ethereum";
  }
}
