"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myValidators = (function () {
    function myValidators() {
    }
    myValidators.validateEmail = function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
    return myValidators;
}());
exports.myValidators = myValidators;
//# sourceMappingURL=myValidators.js.map