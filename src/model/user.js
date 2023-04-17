class User {
  _userName = ' ';
  _email = '';
  _role = '';
  _id = '';

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get userName() {
    return this._userNmae;
  }
  set userName(value) {
    this._userNmae = value;
  }
  get email() {
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  get role() {
    return this._role;
  }
  set role(value) {
    this._role = value;
  }

  constructor(firstName, lastName, userName, email,role,id) {
    this.firstName = firstName;
    this.userNmae = userName;
    this.email = email;
    this.lastName = lastName;
    this.role = role;
    this.id = id;
  }
}

export default User;