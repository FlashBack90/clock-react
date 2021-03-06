"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = require("react");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.createClock = function () {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    App.prototype.componentDidMount = function () {
        var _this = this;
        setInterval(function () {
            _this.setState({});
        }, 1000);
    };
    App.prototype.render = function () {
        return React.createElement("div", null, this.createClock());
    };
    return App;
}(react_1.Component));
exports.App = App;
//# sourceMappingURL=app.js.map