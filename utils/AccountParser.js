import EtherMainnetAccount from "./EtherMainnetAccount";
import EtherRinkebyAccount from "./EtherRinkebyAccount";
import ERC20Account from "./ERC20Account";

const parsers = {
  ethereum: EtherMainnetAccount,
  rinkeby: EtherRinkebyAccount,
  erc20: ERC20Account
};

export default account => {
  const accountType = account[0];
  const param = account[1];
  return new parsers[accountType](param);
};
