"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationType = void 0;
class UserRegistrationType {
    constructor(userId, userName, email, password, address, fullname, phoneNo, country) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.fullname = fullname;
        this.phoneNo = phoneNo;
        this.country = country;
    }
}
exports.UserRegistrationType = UserRegistrationType;
