import EtherMainnetAccount from "./EtherMainnetAccount";
import EtherRinkebyAccount from "./EtherRinkebyAccount";
class AccountManager {
  async getAccounts() {
    return [new EtherMainnetAccount(), new EtherRinkebyAccount()];
    /*return await new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            {
              bank: "Alior Bank",
              name: "Konto Jakże Osobiste",
              balance: "123.45",
              currency: "PLN",
              type: "fiat",
              iban: "PL03185440316494521378415658"
            },
            {
              bank: "Revolut",
              name: "EUR",
              balance: "678.90",
              currency: "EUR",
              type: "fiat",
              iban: "GB96VAJE17803727651320"
            },
            {
              bank: "Bitcoin",
              name: "Savings Wallet",
              balance: "2.1234",
              currency: "BTC",
              type: "crypto",
              address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX"
            },
            {
              bank: "Ethereum",
              name: "Wallet #1",
              balance: "0.8852",
              currency: "ETH",
              type: "crypto",
              address: "0xa86520a0e9FB2E4d623a052a32a72DB045fC6DC2"
            },
            {
              bank: "Ethereum ERC20 Token",
              name: "Ethcraft Diamonds",
              balance: "173",
              currency: "DIAX",
              type: "erc20",
              address: "0xa86520a0e9FB2E4d623a052a32a72DB045fC6DC2"
            }
          ]),
        2000
      );
    });*/
  }
}

export default new AccountManager();
