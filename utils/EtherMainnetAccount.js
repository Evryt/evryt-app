import GenericEtherAccount from "./GenericEtherAccount";

export default class EtherMainnetAccount extends GenericEtherAccount {
  constructor(privateKey) {
    super(privateKey, "https://api.etherscan.io/api", "Ethereum", "ETH", 1);
  }
}
