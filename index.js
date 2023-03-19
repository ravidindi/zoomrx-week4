class BankAccount {
  constructor(accountType, username, email, password) {
    this.accountType = accountType;
    this.username = username;
    this.email = email;
    this.password = password;
    this.balance = 0;
  }
  get accountType() {
    return this._accountType;
  }
  get balance() {
    return this._balance;
  }

  set balance(balance) {
    this._balance = balance;
  }

  set accountType(accountType) {
    this._accountType = accountType;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }
}
let Bankacc = [];
if (localStorage.getItem("myUsers") !== null)
  Bankacc = JSON.parse(localStorage.getItem("myUsers"));
console.log(Bankacc);

function addUser(newUser) {
  Bankacc.push(newUser);
  localStorage.setItem("myUsers", JSON.stringify(Bankacc));
  console.log(Bankacc);
}

function verifyUser(email, password, accountType) {
  for (let i = 0; i < Bankacc.length; i++) {
    if (
      Bankacc[i]._email === email &&
      Bankacc[i]._password === password &&
      Bankacc[i]._accountType === accountType
    ) {
      localStorage.setItem("currentUser", JSON.stringify(Bankacc[i]));
      return "True";
    } else if (
      Bankacc[i]._email === email &&
      Bankacc[i]._password != password &&
      Bankacc[i]._accountType === accountType
    )
      return "Wrong credentials/options";
  }
  return "User Not Found";
}

function find_and_update(newUser) {
  for (let i = 0; i < Bankacc.length; i++) {
    if (
      Bankacc[i]._email === newUser._email &&
      Bankacc[i]._password === newUser._password
    ) {
      Bankacc[i] = newUser;
      localStorage.setItem("myUsers", JSON.stringify(Bankacc));
      return;
    }
  }
}
