const translate = require("./index");

describe("translate", () => {

// pizza to izzapay

    test("pizza translates to izzapay", () => {
        expect(translate("pizza")).toEqual("izzapay")
    })

// orange to orangeway

    test("orange translates to orangeway", () => {
        expect(translate("orange")).toEqual("orangeway")
    })

//HELLO to ellohay

    test("HELLO translates to ellohay", () => {
        expect(translate("HELLO")).toEqual("ellohay")
    })


})