export default class BankAccount {
  constructor(acc) {
    this.bank = acc.bankName;
    this.balance = acc.bookingBalance;
    this.currency = acc.currency;
    this.type = "fiat";
    this.account = {
      address: acc.accountNumber
    };
  }

  async getBalance() {
    return this.balance;
  }
}
