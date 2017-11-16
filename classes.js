var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = /** @class */ (function () {
    function user(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
        console.log('Name' + '--' + this.name);
    }
    user.prototype.registrer = function () {
        console.log(this.name + '' + 'is already resistered.');
    };
    user.prototype.payVoice = function () {
        console.log(this.name + '--' + 'has paid the bill.');
    };
    return user;
}());
var userTwo = /** @class */ (function (_super) {
    __extends(userTwo, _super);
    function userTwo(id, name, age, roll) {
        var _this = _super.call(this, name, age, roll) || this;
        _this.id = id;
        return _this;
    }
    userTwo.prototype.payVoice = function () {
        _super.prototype.payVoice.call(this);
    };
    return userTwo;
}(user));
var classesObj = new userTwo('1', 'Abhi11', '22', '222');
classesObj.payVoice();
classesObj.registrer();
