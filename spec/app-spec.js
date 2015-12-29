var List = require("../src/app.js")

describe("A List", () => {
    var list;
    beforeEach(() => {
        list = new List(1, 2, 3, 4, 5);
    });

    it("should be composed of head and tail", () => {
        expect(list.head).toEqual(1);
        expect(list.tail).toEqual(new List(2, 3, 4, 5));
    });

    it("should be able to be created by List.cons", () => {
        expect(List.cons(0, list)).toEqual(new List(0, 1, 2, 3, 4, 5));
        expect(() => List.cons(0, {})).toThrow(new Error("The tail of a List should be another List or undefined."));
    });

    it("should be evaluated on each element by a function using forEach method", () => {
        list.forEach( _ => _ + 1 );
        expect(list).toEqual(new List(2, 3, 4, 5, 6));
    });
});
