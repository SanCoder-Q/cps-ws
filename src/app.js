var _ = require('lodash');

var List = function () {
    var args = List.arguments;
    if(!_.isEmpty(args)) {
        this.head = _.head(args);
        if(args.length > 1) {
            this.tail = Object.create(List.prototype);
            List.apply(this.tail, _.tail(args));
        } else {
            this.tail = undefined;
        }
    } else {
        this.head = undefined;
        this.tail = undefined;
    }

};

List.cons = function(head, tail) {
    var list;
    if (!(tail instanceof List) && typeof tail != "undefined") {
        console.error("The tail of a List should be another List or undefined.");
        throw new Error("The tail of a List should be another List or undefined.");
    } else {
        list = Object.create(List.prototype);
        list.head = head;
        list.tail = tail;
    }
    return list;
};

List.prototype.forEach = function(op) {
    // TODO: Please DO NOT use any loop syntexes or loop method in lodash.
};

module.exports = List;
